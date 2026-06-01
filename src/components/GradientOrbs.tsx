export function GradientOrbs({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden>
      <style>{`
        @keyframes float-a {
          0%   { transform: translate(0px, 0px)    scale(1);    }
          33%  { transform: translate(40px, -30px) scale(1.08); }
          66%  { transform: translate(-20px, 20px) scale(0.95); }
          100% { transform: translate(0px, 0px)    scale(1);    }
        }
        @keyframes float-b {
          0%   { transform: translate(0px, 0px)     scale(1);    }
          40%  { transform: translate(-50px, 30px)  scale(1.06); }
          75%  { transform: translate(30px, -20px)  scale(0.97); }
          100% { transform: translate(0px, 0px)     scale(1);    }
        }
        @keyframes float-c {
          0%   { transform: translate(0px, 0px)    scale(1);    }
          50%  { transform: translate(25px, 40px)  scale(1.05); }
          100% { transform: translate(0px, 0px)    scale(1);    }
        }
        @keyframes float-d {
          0%   { transform: translate(0px, 0px)     scale(1);    }
          45%  { transform: translate(-35px, -25px) scale(1.07); }
          100% { transform: translate(0px, 0px)     scale(1);    }
        }
      `}</style>

      {/* Top-left — moss */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '-10%',
          width: '65vw',
          height: '65vw',
          maxWidth: '720px',
          maxHeight: '720px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(51,100,67,0.18) 0%, transparent 70%)',
          animation: 'float-a 28s ease-in-out infinite',
          filter: 'blur(40px)',
        }}
      />

      {/* Top-right — fern */}
      <div
        style={{
          position: 'absolute',
          top: '-5%',
          right: '-15%',
          width: '55vw',
          height: '55vw',
          maxWidth: '620px',
          maxHeight: '620px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(133,171,139,0.14) 0%, transparent 70%)',
          animation: 'float-b 34s ease-in-out infinite',
          filter: 'blur(50px)',
        }}
      />

      {/* Center-bottom — moss, warmer */}
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '30%',
          width: '60vw',
          height: '60vw',
          maxWidth: '680px',
          maxHeight: '680px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(61,86,56,0.12) 0%, transparent 70%)',
          animation: 'float-c 26s ease-in-out infinite',
          filter: 'blur(60px)',
        }}
      />

      {/* Bottom-left — fern, softest */}
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '-10%',
          width: '40vw',
          height: '40vw',
          maxWidth: '480px',
          maxHeight: '480px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(133,171,139,0.10) 0%, transparent 65%)',
          animation: 'float-d 22s ease-in-out infinite',
          filter: 'blur(45px)',
        }}
      />
    </div>
  )
}
