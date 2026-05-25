<script setup>
import { ref,onMounted } from 'vue'

const teachers = ref([])
const showForm = ref(false)
const loading = ref(false)
const error = ref(null)
const newTeacher = ref({
     name: '', email: '', phone: '', class: ''
})

const fetchTeachers = async () => {
  loading.value = true
  try {
    const response = await fetch('http://localhost:5000/api/teachers')
    const data = await response.json()
    if (data.status === 'success') {
      teachers.value = data.teachers
    }
  } catch (err) {
    error.value = 'Could not load teachers'
  } finally {
    loading.value = false
  }
}
const addTeacher = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/teachers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTeacher.value)
    })
    const data = await response.json()
    if (data.status === 'success') {
      showForm.value = false
      newTeacher.value = { name: '', subject: '', email: '', phone: '' }
      fetchTeachers()
    }
  } catch (err) {
    error.value = 'Could not add teacher'
  }
}

// Delete teacher
const deleteTeacher = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/api/teachers/${id}`, {
      method: 'DELETE'
    })
    const data = await response.json()
    if (data.status === 'success') {
      fetchTeachers()
    }
  } catch (err) {
    error.value = 'Could not delete teacher'
  }
}

onMounted(() => {
  fetchTeachers()
})
</script>

<template>
  <div class="page">
    <div class="page-header">
      <h1>Teachers</h1>
      <button @click="showForm = !showForm" class="add-btn">+ Add Teacher</button>
    </div>
    <div class="add-pupil">
      <div class="form-box" v-if="showForm">
        <h3>Add New Teacher</h3>
       <div class="form-grid">
        <div class="form">
         <label>Full Name</label>
         <input type="text" v-model="newTeacher.name" placeholder="Enter full name">
        </div>
        <div class="form">
         <label>Email</label>
         <input type="email" v-model="newTeacher.email" placeholder="Enter email">
        </div>
        <div class="form">
         <label>Phone Number</label>
         <input type="text" v-model="newTeacher.phone" placeholder="Enter phone number">
        </div>
        <div class="form">
         <label>class</label>
         <select v-model="newTeacher.class">
          <option value="">Select class</option>
          <option>Creche</option>
          <option>Toddlers</option>
          <option>Nursery 1</option>
          <option>Nursery 2</option>
         </select>
        </div>
        <button @click="addTeacher" class="save-btn">Save Teacher</button>
       </div>
      </div>
    </div>

    <div class="table-box">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Class</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(teacher, index)  in teachers" :key="teacher.id">
            <td>{{ index + 1 }}</td>
            <td>{{ teacher.name }}</td>
            <td>{{ teacher.email }}</td>
            <td>{{ teacher.phone }}</td>
            <td>{{ teacher.class }}</td>
            <td>
              <button @click="deleteTeacher(teacher.id)" class="delete-btn">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.page { 
  padding: 24px;
  font-family: var(--font-body); 
}
.page-header { 
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
.page-header h1 {
  font-size: 1.8rem;
  color: var(--dark);
  font-family: var(--font-display);
  font-weight: 700;
}
.add-btn{
  padding: 10px 20px;
  color: white;
  background: var(--primary);
  border: none;
  border-radius: var(--radius-sm);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: var(--shadow);
}
.add-btn:hover {
  background: var(--accent);
  transform: translateY(-2px);
}
.table-box { 
   background: white;
  border-radius: var(--radius);
  padding: 24px;
  box-shadow: var(--shadow);
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
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
th:first-child { 
  border-radius: 8px 0 0 8px; 
}
th:last-child { 
  border-radius: 0 8px 8px 0; 
}

td { 
  padding: 14px 12px;
  border-bottom: 1px solid #f0f4f8;
  color: var(--dark);
  font-size: 0.95rem;
}
tr:hover { 
  background: #f9f9f9; 
}
tr:hover td {
  background: #f0f7ff;
}
.delete-btn {
  background: #ff4757;
  color: white;
  border: none;
  padding: 6px 14px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.3s;
}

.delete-btn:hover {
  background: #ff1f35;
  transform: translateY(-1px);
}
.form-box {
   background: white;
  padding: 24px;
  border-radius: var(--radius);
  margin-bottom: 24px;
  box-shadow: var(--shadow);
  border-top: 4px solid var(--primary);
}
.form-box h3 {
  color: var(--dark);
  font-size: 1.2rem;
  margin-bottom: 16px;
  font-family: var(--font-display);
}
.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 15px;
}
.form {
  display: flex;
  flex-direction: column;
}
.form label {
  font-weight: 600;
  margin-bottom: 6px;
  color: var(--dark);
  font-size: 0.9rem;
}
.form input,
.form select {
  padding: 10px 14px;
  border: 2px solid #e2e8f0;
  border-radius: var(--radius-sm);
  outline: none;
  font-size: 0.95rem;
  transition: border 0.3s;
  font-family: var(--font-body);
}
.form input:focus {
  border-color: var(--primary);
}
.form-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.save-btn {
  background: var(--accent);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 8px;
  transition: all 0.3s;
}
.save-btn:hover {
  background: var(--primary);
  transform: translateY(-2px);
}
</style>