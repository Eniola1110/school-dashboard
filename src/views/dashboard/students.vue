<script setup>
import { ref, onMounted } from 'vue';

const students = ref([])
const showForm = ref(false)
const loading = ref(false)
const error = ref(null)

const newStudent = ref({
  name: '', age: '', gender: '', class: '', parent_name: '', phone: ''
})

// fetch all student
const fetchStudents = async () => {
  loading.value = true
  try {
    const response = await fetch('http://localhost:5000/api/students')
    const data = await response.json()
    if (data.status === 'success') {
      students.value = data.students
    }
  }
  catch (err) {
    error.value = 'could not load students'
  }
  finally {
    loading.value = false
   }
}

// add new student
const addStudent = async() => {
  try {
    const response = await fetch('http://localhost:5000/api/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newStudent.value)
    })
    const data = await response.json()
    if (data.status === 'success') {
      showForm.value = false
      newStudent.value = { name: '', age: '', gender: '', class: '', parent_name: '', phone: '' }
      fetchStudents()
    }
  }
  catch (err) {
    error.value = 'could not add student'
  }
}

// delete student
const deleteStudent = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/api/students/${id}`, {
      method: 'DELETE'
    })
    const data = await response.json()
    if (data.status === 'success') {
      fetchStudents()
    }
  }
  catch (err) {
    error.value = 'could not delete student'
  }
}

onMounted(() => {
  fetchStudents()
})
</script>

<template>
  <div class="page">
    <div class="page-header">
      <h1>Students</h1>
      <button class="add-btn" @click="showForm = !showForm">+ Add Student</button>
    </div>
    <!-- add pupil -->
    <div class="add-pupil">
      <div class="form-box" v-if="showForm">
        <h3>Add New Student</h3>
       <div class="form-grid">
        <div class="form">
         <label>Full Name</label>
         <input type="text" v-model="newStudent.name" placeholder="Enter full name">
        </div>
        <div class="form">
         <label>Age</label>
         <input type="number" v-model="newStudent.age" placeholder="Enter age">
        </div>
        <div class="form">
         <label>Gender</label>
         <select v-model="newStudent.gender">
          <option value="">Select gender</option>
          <option>Male</option>
          <option>Female</option>
         </select>
        </div>
        <div class="form">
         <label>class</label>
         <select v-model="newStudent.class">
          <option value="">Select class</option>
          <option>Creche</option>
          <option>Toddlers</option>
          <option>Nursery 1</option>
          <option>Nursery 2</option>
         </select>
        </div>
        <div class="form">
         <label>Parent Name</label>
         <input type="text" v-model="newStudent.parent_name" placeholder="Enter parent name">
        </div>
        <div class="form">
         <label>Parent phone number</label>
         <input type="text" v-model="newStudent.phone" placeholder="Enter phone number">
        </div>
        <button @click="addStudent" class="save-btn">Save Pupil</button>
       </div>
      </div>
    </div>
    <!-- Students Table -->
    <div class="table-box">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Class</th>
            <th>Parent</th>
            <th>Phone</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in students" :key="student.id">
            <td>{{ index + 1 }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.age }}</td>
            <td>{{ student.gender }}</td>
            <td>{{ student.class }}</td>
            <td>{{ student.parent_name }}</td>
            <td>{{ student.phone }}</td>
            <td>
              <button @click="deleteStudent(student.id)" class="del-btn">Delete</button>
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
  font-family: (--font-body);
}
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
.page-header h1{
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
  box-shadow: var(--shadow);
  transition: all 0.3s;
  cursor: pointer;
}
.add-btn:hover{
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
th:first-child{
  border-radius: 8px 0 0 8px;
}
th:last-child{
  border-radius: 0 8px 8px 0;
}
td {
  padding: 12px;
  border-bottom: 1px solid #f0f4f8;
  color: var(--dark);
  font-size: 0.95rem;
}
tr:hover {
  background: #f0f7ff;
}
.form-box {
  background: white;
  padding: 24px;
  border-radius: var(--radius);
  margin-bottom: 24px;
  box-shadow: var(--shadow);
  border-top: 4px solid var(--primary);
}
.form-box h3{
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
}
.form input,
.form select {
  padding: 10px 14px;
  border: 1px solid #e2e8f0;
  border-radius: var(--radius-sm);
  outline: none;
  font-size: 0.95rem;
  transition: border 0.3s;
  font-family: var(--font-body);
}
.form input:focus,
.form select:focus{
  border-color: var(--primary);
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
.save-btn:hover{
  background: var(--primary);
  transform: translateY(-2px);
}
.del-btn{
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
.del-btn:hover{
  background: #ff1f35;
  transform: translateY(-1px);
}
</style>