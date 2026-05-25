<script setup>
import { ref, onMounted } from 'vue'

const parents =ref( []) 
const showForm = ref(false)
const error = ref(null)
const loading = ref(false)
const newParent = ref({
     name: '', email: '', phone: '', child: ''
})
const fetchParents = async () => {
  loading.value = true
  try {
    const response = await fetch('http://localhost:5000/api/parents')
    const data = await response.json()
    if (data.status === 'success') {
      parents.value = data.parents
    }
  } catch (err) {
    error.value = 'Could not load parents'
  } finally {
    loading.value = false
  }
}

// Add new parent
const addParent = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/parents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newParent.value)
    })
    const data = await response.json()
    if (data.status === 'success') {
      showForm.value = false
      newParent.value = { name: '', email: '', phone: '', student_id: '' }
      fetchParents()
    }
  } catch (err) {
    error.value = 'Could not add parent'
  }
}

// Delete parent
const deleteParent = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/api/parents/${id}`, {
      method: 'DELETE'
    })
    const data = await response.json()
    if (data.status === 'success') {
      fetchParents()
    }
  } catch (err) {
    error.value = 'Could not delete parent'
  }
}

onMounted(() => {
  fetchParents()
})
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
            <th>Child</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(parent, index) in parents" :key="parent.id">
            <td>{{ index + 1 }}</td>
            <td>{{ parent.name }}</td>
            <td>{{ parent.email }}</td>
            <td>{{ parent.phone }}</td>
            <td>{{ parent.child_name || 'No child linked' }}</td>
             <td>
              <button @click="deleteParent(parent.id)" class="delete-btn">Delete</button>
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

.add-btn {
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

.form input {
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

</style>