<script setup>
import { ref } from 'vue';
const pupils = ref ( [
  { id: 1, name: 'Ade Johnson', age: 3, gender: 'Male', class: 'Nursery 1', parent: 'Mr Johnson', phone: '08012345678' },
  { id: 2, name: 'Amaka Obi', age: 4, gender: 'Female', class: 'Nursery 2', parent: 'Mrs Obi', phone: '08087654321' },
  { id: 3, name: 'Tunde Bello', age: 2, gender: 'Male', class: 'Toddlers', parent: 'Mr Bello', phone: '08011112222' },
   { id: 4, name: 'Segun Ade', age: 4, gender: 'Female', class: 'Nursery', parent: 'Mr Segun', phone: '08067892145' },
]) 
const showForm = ref(false)

const newPupil = ref({
  name: '', age: '', gender: '', class: '', parent: '', phone: ''
})

const addPupil = () => {
  pupils.value.push({ id: pupils.value.length + 1, ...newPupil.value })
  showForm.value = false
  newPupil.value = { name: '', age: '', gender: '', class: '', parent: '', phone: ''}
}

</script>

<template>
  <div class="page">
    <div class="page-header">
      <h1>Students</h1>
      <button class="add-btn" @click="showForm = !showForm">+ Add Pupil</button>
    </div>
    <!-- add pupil -->
    <div class="add-pupil">
      <div class="form-box" v-if="showForm">
        <h3>Add New Student</h3>
       <div class="form-grid">
        <div class="form">
         <label>Full Name</label>
         <input type="text" v-model="newPupil.name" placeholder="Enter full name">
        </div>
        <div class="form">
         <label>Age</label>
         <input type="number" v-model="newPupil.age" placeholder="Enter age">
        </div>
        <div class="form">
         <label>Gender</label>
         <select v-model="newPupil.gender">
          <option value="">Select gender</option>
          <option>Male</option>
          <option>Female</option>
         </select>
        </div>
        <div class="form">
         <label>class</label>
         <select v-model="newPupil.class">
          <option value="">Select class</option>
          <option>Creche</option>
          <option>Toddlers</option>
          <option>Nursery 1</option>
          <option>Nursery 2</option>
         </select>
        </div>
        <div class="form">
         <label>Parent Name</label>
         <input type="text" v-model="newPupil.parent" placeholder="Enter parent name">
        </div>
        <div class="form">
         <label>Parent phone number</label>
         <input type="text" v-model="newPupil.phone" placeholder="Enter phone number">
        </div>
        <button @click="addPupil" class="save-btn">Save Pupil</button>
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
          </tr>
        </thead>
        <tbody>
          <tr v-for="pupil in pupils" :key="pupil.id">
            <td>{{ pupil.id }}</td>
            <td>{{ pupil.name }}</td>
            <td>{{ pupil.age }}</td>
            <td>{{ pupil.gender }}</td>
            <td>{{ pupil.class }}</td>
            <td>{{ pupil.parent }}</td>
            <td>{{ pupil.phone }}</td>
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
.add-btn:hover{
  background: rgb(76, 76, 254);
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