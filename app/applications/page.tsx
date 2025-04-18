import { prisma } from '@/lib/db';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function Applications() {
  const candidates = await prisma.candidate.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#1e40af] mb-6">Submitted Applications</h1>
      
      <div className="bg-white rounded-lg border border-[#bfd6f6] shadow-md p-6">
        {candidates.length === 0 ? (
          <p className="text-center text-[#475569] py-8">No applications have been submitted yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#f5f9ff] border-b border-[#bfd6f6]">
                  <th className="py-3 px-4 text-left text-[#1e40af] font-medium">Name</th>
                  <th className="py-3 px-4 text-left text-[#1e40af] font-medium">Email</th>
                  <th className="py-3 px-4 text-left text-[#1e40af] font-medium">Phone</th>
                  <th className="py-3 px-4 text-left text-[#1e40af] font-medium">Resume</th>
                  <th className="py-3 px-4 text-left text-[#1e40af] font-medium">Submitted</th>
                </tr>
              </thead>
              <tbody>
                {candidates.map((candidate) => (
                  <tr key={candidate.id} className="border-b border-[#e2e8f0] hover:bg-[#f8fafc]">
                    <td className="py-3 px-4 text-[#475569]">{candidate.name}</td>
                    <td className="py-3 px-4 text-[#475569]">{candidate.email}</td>
                    <td className="py-3 px-4 text-[#475569]">{candidate.phone}</td>
                    <td className="py-3 px-4 text-[#475569]">
                      {candidate.resumeUrl ? (
                        <a 
                          href={candidate.resumeUrl}
                          className="text-[#2563eb] hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Resume
                        </a>
                      ) : (
                        <span className="text-[#94a3b8]">No resume</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-[#475569]">
                      {new Date(candidate.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      
      <div className="mt-6 text-center">
        <Link
          href="/"
          className="inline-block px-4 py-2 text-sm font-medium text-white bg-[#1e40af] rounded-md hover:bg-[#1e3a8a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1e40af]"
        >
          Back to Application Form
        </Link>
      </div>
    </div>
  );
} 