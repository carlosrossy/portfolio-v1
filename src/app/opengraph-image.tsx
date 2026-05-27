import { ImageResponse } from 'next/og';

export const alt = 'Carlos Rossy — Full Stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background:
            'radial-gradient(ellipse 80% 60% at 25% 30%, rgba(72, 99, 247, 0.25) 0%, transparent 70%), #0b0b0b',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            marginBottom: '48px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '999px',
              background: 'linear-gradient(135deg, #7878d7 0%, #4863f7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '36px',
              fontWeight: 700,
              color: '#ffffff',
            }}
          >
            CR
          </div>
          <div
            style={{
              fontSize: '20px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#9ca3af',
              display: 'flex',
            }}
          >
            Portfolio
          </div>
        </div>

        <div
          style={{
            fontSize: '96px',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 1,
            display: 'flex',
          }}
        >
          Carlos Rossy
        </div>

        <div
          style={{
            marginTop: '24px',
            fontSize: '40px',
            fontWeight: 600,
            background: 'linear-gradient(90deg, #7878d7 0%, #4863f7 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            display: 'flex',
          }}
        >
          Full Stack Developer
        </div>

        <div
          style={{
            marginTop: '48px',
            fontSize: '24px',
            color: '#9ca3af',
            maxWidth: '720px',
            lineHeight: 1.4,
            display: 'flex',
          }}
        >
          Building modern, performant web applications focused on user
          experience.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
