#  - Job Application Portal




##  Features

- **Multi-step application process** - Guided experience with progress tracking
- **File uploads** - Support for resume, audio, and video responses
- **Real-time validation** - Instant feedback on form inputs
- **Database storage** - Persistent storage of all application data
- **Admin dashboard** - View all submitted applications
- **Mobile-responsive** - Works seamlessly on all devices

##  How It Works

### For Applicants

1. **Step 1: Personal Information**
   - Fill in your basic contact details (name, email, phone)
   - Simple validation ensures correct formatting

2. **Step 2: Resume Upload**
   - Upload your resume (supports PDF, DOCX, and other common formats)
   - Files are securely stored in the server's public directory

3. **Step 3: Behavioral Questions**
   - Answer the behavioral question through text, audio recording, or video response
   - Multiple response options to showcase your personality and communication style

4. **Success Page**
   - Confirmation of your application submission
   - Summary of all information provided
   - Options to download your submitted materials

### For Recruiters/Admins

1. **Applications Dashboard** (/applications)
   - View all submitted applications in one place
   - Sort and filter applications based on various criteria
   - Access applicant details and their submitted materials

##  Technical Details

- **Frontend**: Next.js 15.3, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API routes
- **Database**: SQLite with Prisma ORM
- **Storage**: File storage system for resumes and media responses
- **Form Management**: Custom state management with React hooks

##  Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or pnpm package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/aimploy.git
   cd aimploy
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Set up the database:
   ```bash
   npx prisma generate
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)






---


