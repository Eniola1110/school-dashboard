<script setup>
import { ref } from 'vue';

const admins = [
  { id: 1, name: "Mrs Kells", email: "hello@kellschool.com", phone: "07056962562", role: "Admin" },
   {id: 2, name: "Mr Segun", email: "segunao@gmail.com", phone: "07055961562", role: "Admin"}
]
const schoolInfo = ref({
  name: "Kell's School",
  address: "No 13, Estaport Avenue, Sholuyi, Gbagada, Lagos",
  phone: "07056962562",
  email: "hello@kellschool.com",
  term: "Third Term",
  year: "2025/2026",
})
</script>

<template>
  <div>
    <div class="page">
      <h1>Admin Panel</h1>
      <!-- school Information -->
       <div class="section">
        <div class="section-header">
          <h2>School Information</h2>
        </div>

        <!-- view mode -->
        <div class="info-grid">
          <div class="info-card">
            <p class="info-label">School Name</p>
            <p class="info-value">{{ schoolInfo.name }}</p>
          </div>
           <div class="info-card">
            <p class="info-label">Address</p>
            <p class="info-value">{{ schoolInfo.address }}</p>
          </div>
           <div class="info-card">
            <p class="info-label">Phone</p>
            <p class="info-value">{{ schoolInfo.phone }}</p>
          </div>
           <div class="info-card">
            <p class="info-label">Email</p>
            <p class="info-value">{{ schoolInfo.email }}</p> 
          </div>
           <div class="info-card">
            <p class="info-label">Current Term</p>
            <p class="info-value">{{ schoolInfo.term }}</p>
          </div>
           <div class="info-card">
            <p class="info-label">Academic Year</p>
            <p class="info-value">{{ schoolInfo.year }}</p>
          </div>
        </div>
       </div>

       <!-- Admin Staff -->
        <div class="section">
          <div class="section-header">
            <h2>Admin Staff</h2>
          </div>

           <!-- admin table -->
            <div class="table-box">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(admin, index) in admins" :key="admin.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ admin.name }}</td>
                    <td>{{ admin.email }}</td>
                    <td>{{ admin.phone }}</td>
                   <td><span class="role-badge">{{ admin.role }}</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.page {
 padding: 24px;
 font-family: var(--font-body);
}
.page h1 {
  font-size: 1.8rem;
  color: var(--dark);
  font-family: var(--font-display);
  font-weight: 700;
}
.page h2{
  color: var(--primary);
}
.section {
 background: white;
  border-radius: var(--radius);
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: var(--shadow);
  border-top: 4px solid var(--primary);
}
.section-header {
  margin-bottom: 20px;
}
.section-header h2 {
  color: var(--dark);
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
}
.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.info-card {
 background: #f0f7ff;
  padding: 16px;
  border-radius: var(--radius-sm);
  border-left: 4px solid var(--primary);
  transition: transform 0.2s;
}
.info-card:hover {
  transform: translateY(-2px);
}
.info-label {
  font-size: 0.8rem;
  color: #718096;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.info-value {
 font-size: 1rem;
  font-weight: 700;
  color: var(--dark);
}
.table-box {
  overflow-x: auto;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th {
  background: var(--primary);
  color: white;
  padding: 14px 12px;
  text-align: left;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
th:first-child { border-radius: 8px 0 0 8px; }
th:last-child { border-radius: 0 8px 8px 0; }
td {
  padding: 14px 12px;
  border-bottom: 1px solid #f0f4f8;
  color: var(--dark);
  font-size: 0.95rem;
}
tr:hover td {
  background: #f0f7ff;
}
.role-badge {
  background: var(--accent);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}
</style>