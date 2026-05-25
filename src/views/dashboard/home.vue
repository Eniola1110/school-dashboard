<script setup>
import { ref,onMounted } from 'vue'
const stats = ref([
  { id: 1, title: 'Total Students', value: 150 , icon: 'fa-solid fa-child' },
  { id: 2, title: 'Teachers', value: 10, icon: 'fa-solid fa-chalkboard-user' },
  { id: 3, title: 'Total Classes', value: 20 , icon: 'fa-solid fa-school' },
  {id: 4, title: 'Total Parents', value: 70 , icon: 'fa-solid fa-people-roof'},
])
const students = ref([])

const announcements = [
  { id: 1, title: "End of Term Party", date: '2026-05-07', message: 'All Parents are invited to the end of the term party.' },
  { id: 2, title: "Fee Reminder", date: '2026-05-07', message:'Second term fees are due by May 20th.' },
  {id: 3, title: "Public Holiday", date: '2026-05-07', message: 'School will be closed on May 27th.'}
]

const fetchStats = async () => {
  try {
    const [studentsRes, teachersRes, parentsRes] = await Promise.all([
      fetch('http://localhost:5000/api/students'),
      fetch('http://localhost:5000/api/teachers'),
      fetch('http://localhost:5000/api/parents'),
    ])
    const studentsData = await studentsRes.json()
    const teachersData = await teachersRes.json()
    const parentsData = await parentsRes.json()

    stats.value[0].value = studentsData.students.length
    stats.value[1].value = teachersData.teachers.length
    stats.value[3].value = parentsData.parents.length

    students.value = studentsData.students.slice(-2).reverse()
  }
  catch (err) {
    console.log('Error fetching stats:', err)
  }
}

onMounted(() => {
  fetchStats()
})
</script>
<template>
  <div class="page">
    <!-- welcome -->
      <div class="welcome">
      <div class="text">
        <h1>Welcome to Kell's School</h1>
        <p>Here is a summary of what is happening in the school today.</p>
      </div>
      <div class="date">
        {{ new Date().toDateString() }}
      </div>
      </div>

      <!-- stats Cards -->
       <div class="stats">
        <div class="stat-card" v-for="stat in stats" :key="stat.id">
            <div class="stat-icon">
              <i :class="stat.icon"></i>
            </div>
            <div class="stat-info">
              <h3>{{ stat.value }}</h3>
              <p>{{ stat.title }}</p>
            </div>
        </div>
       </div>
      <div class="bottom">
        <!-- recent students -->
         <div class="table-box">
          <h2>Recently Added Students</h2>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Class</th>
                <th>Date Added</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(student, index) in students" :key="student.id">
                <td>{{ index + 1}}</td>
                <td>{{ student.name }}</td>
                <td>{{ student.class }}</td>
                <td>{{ new Date(student.created_at).toDateString() }}</td>
              </tr>
            </tbody>
          </table>
         </div>
      <!-- Announcement -->
       <div class="announcement">
         <h2>Announcements</h2>
         <div class="announcement-card" v-for="a in announcements" :key="a.id">
          <div class="announcement-header">
            <h4>{{ a.title }}</h4>
            <span>{{ a.date }}</span>
          </div>
          <p>{{ a.message }}</p>
        </div>
       </div>
       </div>
  </div>
</template>

<style scoped>
.page{
  padding: 24px;
  font-family: var(--font-body);
}
/* welcome */
.welcome {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  background: white;
  padding: 20px 24px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}
.welcome h1{
  color: var(--dark);
  font-size: 1.5rem;
  margin-bottom: 4px;
  font-family: var(--font-display);
  font-weight: 700;
}
.welcome p{
  color: #718096;
  font-size: 0.95rem;
}
.date {
  background: var(--primary);
  color: white;
  padding: 8px 16px;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  font-weight: 600;
}
/* stats */
.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}
.stat-card{
  background: white;
  border-radius: var(--radius);
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: var(--shadow);
  transition: transform 0.3s;
}

.stat-icon{
  width: 55px;
  height: 55px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  flex-shrink: 0;
  background: var(--primary);
  color: white;
}
.stat-info h3{
  font-size: 1.8rem;
  color: var(--dark);
  font-weight: 700;
  margin-bottom: 4px;
}
.stat-info p{
 color: #718096;
  font-size: 0.9rem;
}
 /* bottom */
 .bottom {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
 }
 .table-box {
  background: white;
  border-radius: var(--radius);
  padding: 24px;
  box-shadow: var(--shadow);
 }
 .table-box h2{
  margin-bottom: 16px;
  color: var(--dark);
  font-family: var(--font-display);
  font-size: 1.2rem;
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
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
 }
 th:first-child { 
  border-radius: 8px 0 0 8px; 
}
th:last-child { 
  border-radius: 0 8px 8px 0; 
}
 td{
  padding: 12px;
  border-bottom: 1px solid #f0f4f8;
  color: var(--dark);
  font-size: 0.95rem;
 }
 tr:hover{
  background: #f0f7ff;
  cursor: pointer;
 }
 .announcement {
   background: white;
  border-radius: var(--radius);
  padding: 24px;
  box-shadow: var(--shadow);
 }
 .announcement h2{
 margin-bottom: 16px;
  color: var(--dark);
  font-family: var(--font-display);
  font-size: 1.2rem;
 }
 .announcement-card{
  border-left: 4px solid var(--accent);
  padding: 12px 16px;
  margin-bottom: 14px;
  background: #fffbf0;
  border-radius: 0 8px 8px 0;
  transition: transform 0.2s;
 }
 .announcement-card:hover {
  transform: translateX(4px);
}
 .announcement-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
 }
 .announcement-header h4{
  font-size: 0.95rem;
  color: var(--dark);
  font-weight: 600;
 }
 .announcement-header span{
  font-size: 0.8rem;
  color: #999;
  background: #f0f4f8;
  padding: 2px 8px;
  border-radius: 20px;
 }
 .announcement-card p{
   font-size: 0.85rem;
  color: #718096;
  line-height: 1.5;
 }
</style>