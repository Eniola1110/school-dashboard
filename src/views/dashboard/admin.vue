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
      <h1>Admin</h1>
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
                  <tr v-for="admin in admins" :key="admin.id">
                    <td>{{ admin.id }}</td>
                    <td>{{ admin.name }}</td>
                    <td>{{ admin.email }}</td>
                    <td>{{ admin.phone }}</td>
                    <td>{{ admin.role }}</td>
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
  padding: 20px;
}
.page h1 {
  margin-bottom: 20px;
  color: var(--primary);
}
.page h2{
  color: var(--primary);
}
.section {
  background: white;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
.section-header {
  margin-bottom: 20px;
}
.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}
.info-card {
  background: #f0f9ff;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #0ea5e9;
}
.info-label {
  font-size: 0.8rem;
  color: #999;
  margin-bottom: 5px;
}
.info-value {
  font-size: 1rem;
  font-weight: bold;
  color: #0c4a6e;
}
.table-box {
  overflow-x: auto;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th {
  background: #0ea5e9;
  color: white;
  padding: 12px;
  text-align: left;
}
td {
  padding: 12px;
  border-bottom: 1px solid #eee;
}
tr:hover {
  background: #f0f9ff;
}
</style>