const state = {
  weightHistory: JSON.parse(localStorage.getItem('weightHistory') || '[{"date":"Lun","weight":72.5},{"date":"Mar","weight":72.2},{"date":"Mie","weight":71.9}]'),
  notes: JSON.parse(localStorage.getItem('notes') || '{}'),
  goals:{
    startWeight:72.5,
    targetWeight:68
  },
  streaks:{
    eliteWeeks:6
  }
};

function renderWeightChart(){

  const ctx = document.getElementById('weightChart');

  new Chart(ctx,{
    type:'line',

    data:{
      labels: state.weightHistory.map(x=>x.date),

      datasets:[{
        data: state.weightHistory.map(x=>x.weight),
        borderColor:'#22c55e',
        tension:.4,
        borderWidth:3,
        pointRadius:4
      }]
    },

    options:{
      plugins:{
        legend:{display:false}
      }
    }
  });
}

function getColorLevel(score){

  if(score >= 90) return 'level-4';
  if(score >= 75) return 'level-3';
  if(score >= 50) return 'level-2';
  if(score > 0) return 'level-1';

  return 'level-0';
}

function renderCalendar(){

  const grid = document.getElementById('calendarGrid');

  for(let i=1;i<=30;i++){

    const score = Math.floor(Math.random()*100);

    const div = document.createElement('div');

    div.className = `day-box ${getColorLevel(score)}`;

    div.title = `${score}% cumplimiento`;

    grid.appendChild(div);
  }
}

function updateGoal(){

  const current = state.weightHistory.at(-1).weight;

  const total = state.goals.startWeight - state.goals.targetWeight;

  const done = state.goals.startWeight - current;

  const pct = (done / total) * 100;

  document.getElementById('goalBar').style.width = pct + '%';

  document.getElementById('goalText').innerHTML =
    `Te faltan ${(current-state.goals.targetWeight).toFixed(1)}kg`;
}

function setMood(mood){

  const today = new Date().toISOString().split('T')[0];

  state.notes[today] = {
    text: document.getElementById('dailyNote').value,
    mood
  };

  localStorage.setItem('notes', JSON.stringify(state.notes));
}

async function enableNotifications(){

  if(Notification.permission !== 'granted'){
    await Notification.requestPermission();
  }
}

function checkGymReminder(){

  const now = new Date();

  if(now.getHours() === 18 && now.getMinutes() === 30){

    new Notification('💪 Hora del gym',{
      body:'No rompas la racha hoy.'
    });
  }
}

setInterval(checkGymReminder,60000);

function toggleTheme(){
  document.body.classList.toggle('light');
}

function exportExcel(){

  const wb = XLSX.utils.book_new();

  const ws = XLSX.utils.json_to_sheet(state.weightHistory);

  XLSX.utils.book_append_sheet(wb, ws, 'Historial');

  XLSX.writeFile(wb, 'tracker.xlsx');
}

async function exportPDF(){

  const { jsPDF } = window.jspdf;

  const doc = new jsPDF();

  doc.text('Tracker Premium',20,20);

  doc.save('tracker.pdf');
}

renderWeightChart();
renderCalendar();
updateGoal();
enableNotifications();
