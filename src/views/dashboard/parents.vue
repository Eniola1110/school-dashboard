<script setup>
import { ref } from 'vue'

const parents =ref( [
  { id: 1, name: 'Mr Johnson', email: 'johnson@gmail.com', phone: '08012345678', address: '12 Lagos Street', child: 'Ade Johnson' },
  { id: 2, name: 'Mrs Obi', email: 'obi@gmail.com', phone: '08087654321', address: '5 Abuja Road', child: 'Amaka Obi' },
]) 

const showForm = ref(false)

const newParent = ref({
     name: '', email: '', phone: '', address: '', child: ''
})
const addParent = () => {
  parents.value.push({ id: parents.value.length + 1, ...newParent.value })
  showForm.value = false
  newParent.value = { name: '', email: '', phone: '', address: '', child: '' }
}
</script>

<template>
  <div class="page">
    <div class="page-header">
      <h1>Parents</h1>
      <button @click="showForm = !showForm" class="add-btn">+ Add Parent</button>
    </div>
    <div class="add-pupil">
      <div class="form-box" v-if="showForm">
        <h3>Add New Parent</h3>
       <div class="form-grid">
        <div class="form">
         <label>Full Name</label>
         <input type="text" v-model="newParent.name" placeholder="Enter full name">
        </div>
        <div class="form">
         <label>Email</label>
         <input type="email" v-model="newParent.email" placeholder="Enter email">
        </div>
        <div class="form">
         <label>Phone Number</label>
         <input type="text" v-model="newParent.phone" placeholder="Enter phone number">
        </div>
        <div class="form">
         <label>Address</label>
         <input type="text" v-model="newParent.address" placeholder="Enter address">
        </div>
        <div class="form">
         <label>Child Name</label>
         <input type="text" v-model="newParent.child" placeholder="Enter name">
        </div>
        <button @click="addParent" class="save-btn">Save Parent</button>
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
            <th>Address</th>
            <th>Child</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="parent in parents" :key="parent.id">
            <td>{{ parent.id }}</td>
            <td>{{ parent.name }}</td>
            <td>{{ parent.email }}</td>
            <td>{{ parent.phone }}</td>
            <td>{{ parent.address }}</td>
            <td>{{ parent.child }}</td>
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
  background: #2c3e50; 
  color: white; 
  padding: 12px; 
  text-align: left; 
  background: var(--primary);
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