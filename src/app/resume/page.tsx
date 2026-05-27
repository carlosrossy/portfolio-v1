import type { Metadata } from 'next';
import { ResumeContent } from './resume-content';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Carlos Rossy — Full Stack Developer resume / currículo',
};

export default function ResumePage() {
  return <ResumeContent />;
}
