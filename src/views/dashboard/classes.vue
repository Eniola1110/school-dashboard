<script setup>
const classes = [
  { id: 1, name: 'Creche', teacher: 'Mrs Adaeze', students: 10, ageGroup: '0 - 1 year' },
  { id: 2, name: 'Toddlers', teacher: 'Mr Emeka', students: 15, ageGroup: '1 - 2 years' },
  { id: 3, name: 'Nursery 1', teacher: 'Mrs Adaeze', students: 20, ageGroup: '2 - 3 years' },
  { id: 4, name: 'Nursery 2', teacher: 'Mr Emeka', students: 18, ageGroup: '3 - 4 years' },
]

</script>

<template>
  <div class="page">
    <div class="page-header">
      <h1>Classes</h1>
    </div>
    <div class="cards">
      <div class="card" v-for="c in classes" :key="c.id">
        <div class="card-header">
          <h3>{{ c.name }}</h3>
        </div>
        <p><strong>Teacher:</strong> {{ c.teacher }}</p>
        <p><strong>Students:</strong> {{ c.students }}</p>
        <p><strong>Age Group:</strong> {{ c.ageGroup }}</p>
      </div>
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
.cards { 
  display: grid; 
  grid-template-columns: repeat(2, 1fr); 
  gap: 20px; 
}
.card { 
  background: var(--primary); 
  padding: 20px; 
  border-radius: 10px; 
  box-shadow: 0 2px 10px rgba(0,0,0,0.1); 
}
.card-header { 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  margin-bottom: 10px; 
}
.card p { 
  margin-bottom: 8px; 
  color: white; 
}
</style>