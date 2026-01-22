**Personal Website**
This project is a full-stack personal ecosystem built with a focus on DevOps and automation. It hosts my portfolio, blogs, and projects, using an external "Headless" workflow where data is managed in Notion and synced to a production database via n8n.

**🚀 Architecture Overview**
The entire system is containerized and managed via Docker Compose on a DigitalOcean Droplet.

__Frontend__: React-based portfolio served via Nginx.
__Backend__: Node.js & TypeScript REST API using Prisma ORM.
__Database__: PostgreSQL for persistent storage of blogs and projects.
__Pipeline__: n8n automation hub running on a dedicated subdomain (n8n.piyu.me).
__Reverse Proxy__: Nginx Proxy Manager (NPM) handling SSL termination (Let's Encrypt) and subpath/subdomain routing.

🔄 **The Content Pipeline**
This project uses a "Headless CMS" approach:

__Drafting__: Projects and blogs are written in Notion.
__Syncing__: A Notion webhook triggers the n8n pipeline.
__Processing__: n8n fetches child blocks, merges multi-block descriptions into a single string using custom JavaScript, and "upserts" the data into the production DB.
__Delivery__: The Backend API serves the cleaned data to the frontend.

**Local Development**

Clone the repo: git clone https://github.com/piyush169/personal-website.git
Install dependencies in /backend-website and /frontend-website.
Set up your .env for Prisma and DB connection strings.
Run docker-compose up -d to launch the local stack.

**Production**
The production environment is automatically updated via GitHub Actions upon pushing to the main branch.
