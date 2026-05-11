<script setup>
import { ref } from 'vue'

const teachers = ref([
  { id: 1, name: 'Mrs Adaeze', email: 'adaeze@gmail.com', phone: '08011112222', class: 'Nursery 1' },
  { id: 2, name: 'Mr Emeka', email: 'emeka@gmail.com', phone: '08022223333', class: 'Nursery 2' },
])

const showForm = ref(false)

const newTeacher = ref({
     name: '', email: '', phone: '', class: ''
})
const addTeacher = () => {
  teachers.value.push({ id: teachers.value.length + 1, ...newTeacher.value })
  showForm.value = false
  newTeacher.value = { name: '', email: '', phone: '', class: '' }
}
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
          </tr>
        </thead>
        <tbody>
          <tr v-for="teacher in teachers" :key="teacher.id">
            <td>{{ teacher.id }}</td>
            <td>{{ teacher.name }}</td>
            <td>{{ teacher.email }}</td>
            <td>{{ teacher.phone }}</td>
            <td>{{ teacher.class }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.page { 
  padding: 20px; 
}
.page-header { 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  margin-bottom: 20px; 
  color: var(--primary);
}
.add-btn{
  padding: 10px 10px;
  color: white;
  background: var(--primary);
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  transition: 1s;
  cursor: pointer;
}
.table-box { 
  background: white; 
  border-radius: 10px; 
  padding: 20px; 
  box-shadow: 0 2px 10px rgba(0,0,0,0.1); 
  overflow-x: auto; 
}
table { 
  width: 100%; 
  border-collapse: collapse; 
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
tr:hover { 
  background: #f9f9f9; 
}
.form-box {
  background: var(--primary);
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-top: 15px;
}
.form {
  display: flex;
  flex-direction: column;
}
.form label {
  font-weight: bold;
  margin-bottom: 5px;
}
.form input,
.form select {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
}
.form-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
.save-btn {
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>