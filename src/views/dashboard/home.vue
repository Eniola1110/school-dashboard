<script setup>
const stats = [
  { id: 1, title: 'Total Students', value: 250, icon: 'fa-solid fa-child' },
  { id: 2, title: 'Teachers', value: 30, icon: 'fa-solid fa-chalkboard-user' },
  { id: 3, title: 'Total Classes', value: 15, icon: 'fa-solid fa-school' },
  {id: 4, title: 'Total Parents', value: 50, icon: 'fa-solid fa-people-roof'},
]
const students = [
  { id: 1, name: "Ade Johnson", class: "Nursery 1", date: "2026-04-01" },
  { id: 2, name: "Amaka Obi", class: "Nursery 2", date: "2026-04-21" },
  { id: 3, name: "Tunde Bello", class: "Toddlers", date: "2026-3-15" },
  { id: 4, name: "Segun Ade", class: "Creche", date: "2026-04-01"},
]
const announcements = [
  { id: 1, title: "End of Term Party", date: '2026-05-07', message: 'All Parents are invited to the end of the term party.' },
  { id: 2, title: "Fee Reminder", date: '2026-05-07', message:'Second term fees are due by May 20th.' },
  {id: 3, title: "Public Holiday", date: '2026-05-07', message: 'School will be closed on May 27th.'}
]
</script>
<template>
  <div class="page">
    <!-- welcome -->
      <div class="welcome">
        <h1>Welcome to Kell's School</h1>
        <p>Here is a summary of what is happening in the school today.</p>
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
              <tr v-for="student in students" :key="student.id">
                <td>{{ student.id }}</td>
                <td>{{ student.name }}</td>
                <td>{{ student.class }}</td>
                <td>{{ student.date }}</td>
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
  padding: 20px;
}
/* welcome */
.welcome {
  margin-bottom: 30px;
}
.welcome h1{
  color: var(--primary);
  font-size: 1.5rem;
  margin-bottom: 5px;
}
.welcome p{
  color: #777;
}

/* stats */
.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}
.stat-card{
  background: var(--secondary);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.stat-icon{
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  background: var(--primary);
  color: var(--text);
}
.stat-info h3{
  font-size: 1.5rem;
  margin-bottom: 10px;
}
.stat-info p{
  color: #777;
  font-size: 1.2rem;
}
 /* bottom */
 .bottom {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
 }
 .table-box {
  background: var(--secondary);
  border-radius: 10px;
  padding:20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
 }
 .table-box h2{
  margin-bottom: 15px;
  color: var(--primary);
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
 }
 td{
  padding: 12px;
  border-bottom: 1px solid #eee;
 }
 tr:hover{
  background: #f9f9f9;
  cursor: pointer;
 }
 .announcement {
  background: var(--secondary);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) ;
 }
 .announcement h2{
  margin-bottom: 15px;
  color: var(--primary);
 }
 .announcement-card{
  border-left: 4px solid #2c3e50;
  padding: 10px 15px;
  margin-bottom: 15px;
  background: #f9f9f9;
  border-radius: 0 5px 5px 0;
 }
 .announcement-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
 }
 .announcement-header h4{
  font-size: 0.95rem;
 }
 .announcement-header span{
  font-size: 0.8rem;
  color: #999;
 }
 .announcement-card p{
  font-size: 0.85rem;
  color: #666;
 }
</style>