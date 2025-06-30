<h1>backend</h1>
<h3>Setup server</h3>
<p>npm init -y</p>

<h3>Basic Middlewares</h3>
<p>npm install express cors morgan nodemon</p>

<h3>validate</h3>
<p>npm install yup</p>

<h3>prisma</h3>
<p>npm install prisma</p>

<h3>ค่าดีฟอลแตกต่างกัน</h3>
<p>npx prisma init --datasource-provider mysql</p>
<p>npx prisma init --datasource-provider postgresql</p>
<p>npx prisma init --datasource-provider sqlite</p>
<p>npx prisma init</p>

<h3>DATABASE_URL ความต่าง</h3>
<p>DATABASE_URL="mysql://root:password@localhost:3306/mydb"</p>
<p>DATABASE_URL="postgresql://postgres:password@localhost:5432/mydb"</p>
<p>DATABASE_URL="file:./sqlite.db"</p>

<p>npx prisma migrate dev --name init  รันทุกครั้งที่แก้ schema</p> 
<p>npm install @prisma/client</p>

<p>npx prisma migrate dev --name updated-schema รันทุกครั้งที่แก้ schema</p>

<h3>Authenticate</h3>
<p>npm install bcryptjs jsonwebtoken</p>


<h3>ถ้าจะให้มันอ่านฐานข้อมูลที่มีอยู่แล้ว</h3>
<p>npx prisma db pull</p>
<p>npx prisma generate</p>