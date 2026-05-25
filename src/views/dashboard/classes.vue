<script setup>
const classes = [
  { id: 1, name: 'Creche', teacher: 'Mrs Adaeze', students: 10, ageGroup: '0 - 1 year' },
  { id: 2, name: 'Toddlers', teacher: 'Mr Emeka', students: 15, ageGroup: '1 - 2 years' },
  { id: 3, name: 'Nursery 1', teacher: 'Miss Adeshewa', students: 20, ageGroup: '2 - 3 years' },
  { id: 4, name: 'Nursery 2', teacher: 'Mr Phillip', students: 18, ageGroup: '3 - 4 years' },
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
       <div class="card-body">
          <div class="info-row">
            <span class="info-label">Teacher</span>
            <span class="info-value">{{ c.teacher }}</span>
          </div>
          <div class="info-row">
            <span class="info-label"> Students</span>
            <span class="info-value">
              <span class="students-no">{{ c.students }}</span>
            </span>
          </div>
          <div class="info-row">
            <span class="info-label">Age Group</span>
            <span class="info-value">{{ c.ageGroup }}</span>
          </div>
        </div>
      </div>
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
.cards { 
  display: grid; 
  grid-template-columns: repeat(2, 1fr); 
  gap: 24px; 
}
.card { 
  background: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  border-top: 4px solid var(--primary);
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}
.card-header { 
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background: linear-gradient(135deg, var(--dark), #2d3a5a);
}
.card-header h3 {
  color: white;
  font-size: 1.3rem;
  font-family: var(--font-display);
  font-weight: 700;
}

.card-body {
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid #f0f4f8;
}

.info-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.info-label {
  color: #718096;
  font-size: 0.9rem;
}

.info-value {
  color: var(--dark);
  font-weight: 600;
  font-size: 0.95rem;
}

.students-no {
  background: var(--primary);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
}
</style>