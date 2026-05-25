<script setup>
import { ref,onMounted } from 'vue'

const selectedClass = ref('')
const selectedDate = ref('')
const loading = ref(false)
const students = ref([])
const error = ref(null)
const success = ref(false)

const fetchStudents = async () => {
  loading.value = true
  try {
    const response = await fetch('http://localhost:5000/api/students')
    const data = await response.json()
    if (data.status === 'success') {
      students.value = data.students.map(student => ({
        ...student,
        status: 'Present'
      }))
    }
  } catch (err) {
    error.value = 'Could not load students'
  } finally {
    loading.value = false
  }
}

// Save attendance
const saveAttendance = async () => {
  if (!selectedDate.value) {
    error.value = 'Please select a date'
    return
  }

  try {
    for (const student of students.value) {
      await fetch('http://localhost:5000/api/attendance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          student_id: student.id,
          date: selectedDate.value,
          status: student.status
        })
      })
    }
    success.value = true
    error.value = null
    setTimeout(() => {
      success.value = false
    }, 3000) 
  }
  catch (err) {
    error.value = 'Could not save attendance'
  }
}

const attendanceHistory = ref([])

const fetchAttendance = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/attendance')
    const data = await response.json()
    if (data.status === 'success') {
      attendanceHistory.value = data.attendance
    }
  } catch (err) {
    console.log('Could not load attendance history')
  }
}
onMounted(() => {
  fetchStudents()
  fetchAttendance()
})
</script>

<template>
  <div class="page">
    <div class="page-header">
      <h1>Attendance</h1>
    </div>

    <!-- Filters -->
    <div class="filters-box">
      <div class="form-group">
        <label> Select Date</label>
        <input type="date" v-model="selectedDate" />
      </div>
      <div class="form-group">
        <label> Select Class</label>
        <select v-model="selectedClass">
          <option value="">All Classes</option>
          <option>Creche</option>
          <option>Toddlers</option>
          <option>Nursery 1</option>
          <option>Nursery 2</option>
        </select>
      </div>
    </div>

    <!-- Success Message -->
    <div class="success-msg" v-if="success">
      Attendance saved successfully!
    </div>

    <!-- Error Message -->
    <p v-if="error" class="error">{{ error }}</p>

    <!-- Loading -->
    <p v-if="loading" class="loading">Loading students... ⏳</p>

    <!-- Attendance Table -->
    <div class="table-box" v-if="!loading">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Class</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, index) in students" :key="student.id">
            <td>{{ index + 1 }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.class }}</td>
            <td>
              <select v-model="student.status" :class="student.status.toLowerCase()">
                <option>Present</option>
                <option>Absent</option>
                <option>Late</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <button class="save-btn" @click="saveAttendance">
        Save Attendance
      </button>
    </div>

    <!-- <div class="history-box">
  <h2>📋 Attendance History</h2>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Student ID</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(record, index) in attendanceHistory" :key="record.id">
        <td>{{ index + 1 }}</td>
        <td>{{ record.student_id }}</td>
        <td>{{ new Date(record.date).toDateString() }}</td>
        <td>
          <span :class="'status-' + record.status.toLowerCase()">
            {{ record.status }}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
  </div> -->
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

.badge {
  background: var(--primary);
  color: white;
  padding: 8px 16px;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  font-weight: 600;
}

/* Filters */
.filters-box {
  background: white;
  padding: 20px 24px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-weight: 600;
  color: var(--dark);
  font-size: 0.9rem;
}

.form-group input,
.form-group select {
  padding: 10px 14px;
  border: 2px solid #e2e8f0;
  border-radius: var(--radius-sm);
  outline: none;
  font-size: 0.95rem;
  transition: border 0.3s;
  font-family: var(--font-body);
  min-width: 200px;
}

.form-group input:focus,
.form-group select:focus {
  border-color: var(--primary);
}

/* Success & Error */
.success-msg {
  background: #e6ffed;
  color: #2f855a;
  padding: 14px 20px;
  border-radius: var(--radius-sm);
  margin-bottom: 20px;
  font-weight: 600;
  border-left: 4px solid #2f855a;
}

.error {
  background: #fff5f5;
  color: #ff4757;
  padding: 14px 20px;
  border-radius: var(--radius-sm);
  margin-bottom: 20px;
  font-weight: 600;
  border-left: 4px solid #ff4757;
}

.loading {
  text-align: center;
  padding: 40px;
  color: var(--primary);
  font-size: 1.1rem;
}

/* Table */
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
  margin-bottom: 20px;
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

/* Status dropdown colors */
td select {
  padding: 6px 12px;
  border-radius: 20px;
  border: 2px solid #e2e8f0;
  outline: none;
  font-weight: 600;
  cursor: pointer;
  font-family: var(--font-body);
}

td select.present {
  border-color: #2f855a;
  color: #2f855a;
  background: #e6ffed;
}

td select.absent {
  border-color: #ff4757;
  color: #ff4757;
  background: #fff5f5;
}

td select.late {
  border-color: #F5A623;
  color: #F5A623;
  background: #fffbf0;
}

/* Save Button */
.save-btn {
  background: var(--primary);
  color: white;
  border: none;
  padding: 12px 28px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s;
  box-shadow: var(--shadow);
}

.save-btn:hover {
  background: var(--accent);
  transform: translateY(-2px);
}
.history-box {
  background: white;
  border-radius: var(--radius);
  padding: 24px;
  box-shadow: var(--shadow);
  margin-top: 24px;
  overflow-x: auto;
}

.history-box h2 {
  color: var(--dark);
  font-family: var(--font-display);
  font-size: 1.2rem;
  margin-bottom: 16px;
}

.status-present {
  background: #e6ffed;
  color: #2f855a;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.status-absent {
  background: #fff5f5;
  color: #ff4757;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.status-late {
  background: #fffbf0;
  color: #F5A623;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}


</style>