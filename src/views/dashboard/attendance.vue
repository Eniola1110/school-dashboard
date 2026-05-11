<script setup>
import { ref } from 'vue'

const selectedClass = ref('Nursery 1')
const selectedDate = ref('')

const students = ref([
  { id: 1, name: 'Ade Johnson', status: 'Present' },
  { id: 2, name: 'Amaka Obi', status: 'Present' },
  { id: 3, name: 'Tunde Bello', status: 'Present' },
])

const saveAttendance = () => {
  alert('Attendance saved successfully!')
}
</script>

<template>
  <div class="page">
    <h1>Attendance</h1>

    <div class="filters">
      <div class="form-group">
        <label>Select Date</label>
        <input type="date" v-model="selectedDate" />
      </div>
      <div class="form-group">
        <label>Select Class</label>
        <select v-model="selectedClass" >
          <option>Creche</option>
          <option>Toddlers</option>
          <option>Nursery 1</option>
          <option>Nursery 2</option>
        </select>
      </div>
    </div>

    <div class="table-box">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students" :key="student.id">
            <td>{{ student.id }}</td>
            <td>{{ student.name }}</td>
            <td>
              <select v-model="student.status">
                <option>Present</option>
                <option>Absent</option>
                <option>Late</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <button class="save-btn" @click="saveAttendance">Save Attendance</button>
    </div>
  </div>
</template>

<style scoped>
.page { 
  padding: 20px; 
}
h1 { 
  margin-bottom: 20px; 
  color: var(--primary);
}
.filters { 
  display: flex; 
  gap: 20px; 
  margin-bottom: 20px; 
}
.form-group label{
  font-size: 1rem;
  padding-right: 20px;
}
.form-group input,
.form-group select{
  padding: 5px;
  background: var(--primary);
  color: white;
  border-radius: 10px;
  border: none;
}
.table-box { 
  background: white; 
  border-radius: 10px; 
  padding: 20px; 
  box-shadow: 0 2px 10px rgba(0,0,0,0.1); 
}
table { 
  width: 100%; 
  border-collapse: collapse; 
  margin-bottom: 20px; 
}
th { 
  background: var(--primary); 
  color: white; 
  padding: 12px; 
  text-align: left; 
}
td { 
  padding: 12px; 
  border-bottom: 1px solid #eee; 
}
td select { 
  padding: 5px; 
  border: 1px solid #ddd; 
  border-radius: 5px; 
}
tr:hover { 
  background: #f9f9f9;
}
.save-btn { 
  background: var(--primary);
  color: white;
  border: none; 
  padding: 10px 20px; 
  border-radius: 5px; 
  cursor: pointer; 
  font-size: 1rem; 
}
</style>