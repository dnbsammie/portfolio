precision highp float;

uniform float iTime;
uniform vec2 iResolution;
uniform vec4 iMouse; 
uniform int iFrame;
uniform sampler2D iPreviousFrame;
uniform float uFluidDecay;
uniform float uTrailLength;

varying vec2 vUv;

vec2 ur; 
vec2 U;  

float distanceToSegment(vec2 p, vec2 a, vec2 b){
    return length(p - a - (b - a) * clamp(dot(p - a, b - a) / dot(b - a, b - a), 0.0, 1.0));
}

vec4 sampleFluidTextureOffset(vec2 v, int a, int b){
    return texture2D(iPreviousFrame, fract((v + vec2(float(a), float(b))) / ur));
}

vec4 sampleFluidTexture(vec2 v){
    return texture2D(iPreviousFrame, fract(v / ur));
}

float area(vec2 a, vec2 b, vec2 c){
    float A_side = length(b - c);
    float B_side = length(c - a);
    float C_side = length(a - b);
    float s = 0.5 * (A_side + B_side + C_side);
    return sqrt(max(s * (s - A_side) * (s - B_side) * (s - C_side), 0.0));
}

void main(){
    U = vUv * iResolution;
    ur = iResolution.xy;

    if (iFrame < 1) { 
        float w = 0.5 + sin(0.2 * U.x) * 0.5;
        float q = length(U - 0.5 * ur);
        gl_FragColor = vec4(0.1 * exp(-0.001 * q * q), 0.0, 0.0, w);
    } else {
        vec2 v = U,
            A = v + vec2(1.0, 1.0),
            B = v + vec2(1.0, -1.0),
            C = v + vec2(-1.0, 1.0),
            D = v + vec2(-1.0, -1.0);

        for (int i = 0; i < 8; i++) {
            v -= sampleFluidTexture(v).xy;
            A -= sampleFluidTexture(A).xy;
            B -= sampleFluidTexture(B).xy;
            C -= sampleFluidTexture(C).xy;
            D -= sampleFluidTexture(D).xy;
        }

        vec4 currentFluidState = sampleFluidTexture(v); 

        vec4 n = sampleFluidTextureOffset(v, 0, 1);
        vec4 e = sampleFluidTextureOffset(v, 1, 0);
        vec4 s = sampleFluidTextureOffset(v, 0, -1);
        vec4 w = sampleFluidTextureOffset(v, -1, 0);
        vec4 smoothedNeighbors = 0.25 * (n + e + s + w);

        currentFluidState = mix(sampleFluidTexture(v), smoothedNeighbors, vec4(0.15, 0.15, 0.95, 0.0));
        currentFluidState.z = currentFluidState.z - 0.01 * ((area(A, B, C) + area(B, C, A)) - 1.0);

        vec4 pressureNeighbors = vec4(e.z, w.z, n.z, s.z); 
        currentFluidState.xy = currentFluidState.xy + 100.0 * vec2(pressureNeighbors.x - pressureNeighbors.y, pressureNeighbors.z - pressureNeighbors.w) / ur;

        currentFluidState.xy *= uFluidDecay;
        currentFluidState.z *= uTrailLength;


        gl_FragColor = clamp(currentFluidState, -0.4, 0.4);
    }
}