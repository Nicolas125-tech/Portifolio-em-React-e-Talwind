import { useState, useRef, useEffect } from 'react';
import { 
  Mic2, Pause, Play, Trello, Plus, Database, Code, Award, 
  Layout, DollarSign, Users, Activity, TrendingUp, 
  ArrowLeft, ArrowRight, Trash2, Gauge
} from 'lucide-react';
import { SectionTitle } from './SectionTitle';

// --- MINI APLICAÇÕES (DEMOS) ---

// 1. DSP AUDIOLAB (Funcional com Web Audio API)
const DSPDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [frequency, setFrequency] = useState(440);
  const [waveType, setWaveType] = useState('sine');
  const [volume, setVolume] = useState(0.5);
  const audioCtxRef = useRef(null);
  const oscillatorRef = useRef(null);
  const gainNodeRef = useRef(null);
  const canvasRef = useRef(null);
  const analyserRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    return () => stopSound(); // Cleanup
  }, []);

  const startSound = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    oscillatorRef.current = audioCtxRef.current.createOscillator();
    gainNodeRef.current = audioCtxRef.current.createGain();
    analyserRef.current = audioCtxRef.current.createAnalyser();

    oscillatorRef.current.type = waveType;
    oscillatorRef.current.frequency.setValueAtTime(frequency, audioCtxRef.current.currentTime);
    gainNodeRef.current.gain.setValueAtTime(volume, audioCtxRef.current.currentTime);

    oscillatorRef.current.connect(gainNodeRef.current);
    gainNodeRef.current.connect(analyserRef.current);
    analyserRef.current.connect(audioCtxRef.current.destination);

    oscillatorRef.current.start();
    setIsPlaying(true);
    drawVisualizer();
  };

  const stopSound = () => {
    if (oscillatorRef.current) {
      oscillatorRef.current.stop();
      oscillatorRef.current.disconnect();
    }
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    setIsPlaying(false);
  };

  const updateFrequency = (val) => {
    setFrequency(val);
    if (oscillatorRef.current) oscillatorRef.current.frequency.setValueAtTime(val, audioCtxRef.current.currentTime);
  };

  const updateVolume = (val) => {
    setVolume(val);
    if (gainNodeRef.current) gainNodeRef.current.gain.setValueAtTime(val, audioCtxRef.current.currentTime);
  };

  const updateWaveType = (type) => {
    setWaveType(type);
    if (oscillatorRef.current) oscillatorRef.current.type = type;
  };

  const drawVisualizer = () => {
    if (!analyserRef.current || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      animationRef.current = requestAnimationFrame(draw);
      analyserRef.current.getByteTimeDomainData(dataArray);

      ctx.fillStyle = 'rgb(15, 23, 42)'; // Slate 900
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgb(34, 211, 238)'; // Cyan 400
      ctx.beginPath();

      const sliceWidth = canvas.width * 1.0 / bufferLength;
      let x = 0;

      for(let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = v * canvas.height / 2;

        if(i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);

        x += sliceWidth;
      }

      ctx.lineTo(canvas.width, canvas.height/2);
      ctx.stroke();
    };
    draw();
  };

  return (
    <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2"><Mic2 className="text-cyan-400"/> DSP Audio Lab</h3>
        <div className={`px-3 py-1 rounded-full text-xs font-bold ${isPlaying ? 'bg-green-500/20 text-green-400' : 'bg-slate-700 text-slate-400'}`}>
          {isPlaying ? 'LIVE SIGNAL' : 'STANDBY'}
        </div>
      </div>

      <canvas ref={canvasRef} width={600} height={200} className="w-full h-40 bg-slate-900 rounded-lg border border-slate-700 mb-6 shadow-inner" />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={isPlaying ? stopSound : startSound}
              className={`flex-1 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${isPlaying ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' : 'bg-green-500 hover:bg-green-600 text-slate-900'}`}
            >
              {isPlaying ? <><Pause size={18} /> Parar Oscilador</> : <><Play size={18} /> Iniciar Oscilador</>}
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {['sine', 'square', 'sawtooth', 'triangle'].map(type => (
              <button 
                key={type}
                onClick={() => updateWaveType(type)}
                className={`p-2 rounded text-xs uppercase font-bold border transition-colors ${waveType === type ? 'bg-cyan-500 text-slate-900 border-cyan-500' : 'bg-slate-900 text-slate-400 border-slate-700 hover:border-slate-500'}`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="flex justify-between text-xs text-slate-400 mb-1">
              <span>Frequência</span> <span>{frequency} Hz</span>
            </label>
            <input 
              type="range" min="50" max="2000" value={frequency} 
              onChange={(e) => updateFrequency(Number(e.target.value))}
              className="w-full accent-cyan-400 bg-slate-700 h-2 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div>
            <label className="flex justify-between text-xs text-slate-400 mb-1">
              <span>Volume</span> <span>{Math.round(volume * 100)}%</span>
            </label>
            <input 
              type="range" min="0" max="1" step="0.01" value={volume} 
              onChange={(e) => updateVolume(Number(e.target.value))}
              className="w-full accent-cyan-400 bg-slate-700 h-2 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. KANBAN TASKFLOW (Funcional com Estado Local)
const KanbanDemo = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Planejar Banco de Dados', status: 'todo' },
    { id: 2, title: 'Configurar React Router', status: 'todo' },
    { id: 3, title: 'Criar API Node.js', status: 'in-progress' },
    { id: 4, title: 'Deploy no Vercel', status: 'done' },
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), title: newTask, status: 'todo' }]);
    setNewTask('');
  };

  const moveTask = (id, direction) => {
    const sequence = ['todo', 'in-progress', 'done'];
    setTasks(tasks.map(t => {
      if (t.id !== id) return t;
      const currentIndex = sequence.indexOf(t.status);
      const nextIndex = currentIndex + direction;
      if (nextIndex >= 0 && nextIndex < sequence.length) {
        return { ...t, status: sequence[nextIndex] };
      }
      return t;
    }));
  };

  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

  const Column = ({ title, status, icon: Icon, color }) => (
    <div className="flex-1 min-w-[200px] bg-slate-900/50 rounded-lg p-3 border border-slate-700">
      <div className={`flex items-center gap-2 mb-3 pb-2 border-b border-slate-700 font-bold ${color}`}>
        <Icon size={16} /> {title} <span className="ml-auto bg-slate-800 text-xs px-2 py-0.5 rounded text-slate-400">{tasks.filter(t => t.status === status).length}</span>
      </div>
      <div className="space-y-2">
        {tasks.filter(t => t.status === status).map(task => (
          <div key={task.id} className="bg-slate-800 p-3 rounded border border-slate-700 shadow-sm hover:border-cyan-500/50 transition-colors group">
            <div className="text-sm text-slate-200 mb-2">{task.title}</div>
            <div className="flex justify-between items-center opacity-50 group-hover:opacity-100 transition-opacity">
              <button disabled={status === 'todo'} onClick={() => moveTask(task.id, -1)} className="hover:text-cyan-400 disabled:opacity-30"><ArrowLeft size={14}/></button>
              <button onClick={() => deleteTask(task.id)} className="hover:text-red-400"><Trash2 size={14}/></button>
              <button disabled={status === 'done'} onClick={() => moveTask(task.id, 1)} className="hover:text-cyan-400 disabled:opacity-30"><ArrowRight size={14}/></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2"><Trello className="text-purple-400"/> TaskFlow Board</h3>
        <form onSubmit={addTask} className="flex gap-2">
          <input 
            type="text" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
            placeholder="Nova tarefa..." 
            className="bg-slate-900 border border-slate-700 rounded px-3 py-1 text-sm text-white focus:border-purple-500 outline-none"
          />
          <button type="submit" className="bg-purple-600 hover:bg-purple-500 text-white p-1 rounded transition-colors"><Plus size={18} /></button>
        </form>
      </div>
      
      <div className="flex gap-4 overflow-x-auto pb-2">
        <Column title="A Fazer" status="todo" icon={Database} color="text-slate-400" />
        <Column title="Em Progresso" status="in-progress" icon={Code} color="text-blue-400" />
        <Column title="Concluído" status="done" icon={Award} color="text-green-400" />
      </div>
    </div>
  );
};

// 3. FINANCIAL DASHBOARD (Funcional com CSS Charts)
const DashboardDemo = () => {
  const data = [
    { label: 'Jan', value: 35, revenue: 12000 },
    { label: 'Fev', value: 45, revenue: 15500 },
    { label: 'Mar', value: 30, revenue: 10000 },
    { label: 'Abr', value: 60, revenue: 22000 },
    { label: 'Mai', value: 75, revenue: 28000 },
    { label: 'Jun', value: 50, revenue: 18000 },
  ];

  const maxVal = Math.max(...data.map(d => d.value));

  return (
    <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2"><Layout className="text-green-400"/> Finance Dash</h3>
        <div className="text-xs text-slate-400">Atualizado: Agora mesmo</div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
          <div className="text-slate-400 text-xs mb-1 flex items-center gap-1"><DollarSign size={12}/> Receita Total</div>
          <div className="text-2xl font-bold text-white">R$ 105.5k</div>
          <div className="text-xs text-green-400 flex items-center gap-1 mt-1"><TrendingUp size={10}/> +12%</div>
        </div>
        <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
          <div className="text-slate-400 text-xs mb-1 flex items-center gap-1"><Users size={12}/> Clientes Ativos</div>
          <div className="text-2xl font-bold text-white">1,240</div>
          <div className="text-xs text-green-400 flex items-center gap-1 mt-1"><TrendingUp size={10}/> +5%</div>
        </div>
        <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
          <div className="text-slate-400 text-xs mb-1 flex items-center gap-1"><Activity size={12}/> Churn Rate</div>
          <div className="text-2xl font-bold text-white">2.4%</div>
          <div className="text-xs text-red-400 flex items-center gap-1 mt-1"><TrendingUp size={10} className="rotate-180"/> -0.5%</div>
        </div>
      </div>

      <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
        <h4 className="text-sm font-bold text-slate-300 mb-4">Receita Semestral</h4>
        <div className="flex items-end justify-between h-40 gap-2">
          {data.map((item) => (
            <div key={item.label} className="flex flex-col items-center flex-1 group relative">
              <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 bg-slate-800 text-xs text-white px-2 py-1 rounded border border-slate-600 transition-opacity whitespace-nowrap z-10">
                R$ {item.revenue.toLocaleString()}
              </div>
              <div 
                className="w-full bg-cyan-900/50 rounded-t hover:bg-cyan-500 transition-all relative overflow-hidden group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                style={{ height: `${(item.value / maxVal) * 100}%` }}
              >
                <div className="absolute bottom-0 w-full bg-cyan-500/20 h-full animate-pulse"></div>
              </div>
              <div className="text-xs text-slate-500 mt-2 font-mono">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- SEÇÃO DE DEMOS ---
export const DemosSection = () => {
  const demos = [
    {
      id: 'dsp',
      title: "DSP Audiolab",
      description: "Laboratório de processamento digital de áudio. Aplicação web para visualização de frequências, equalização e manipulação de ondas sonoras em tempo real.",
      tags: ["Web Audio API", "React", "Canvas", "JavaScript"],
      demoComponent: <DSPDemo />,
      icon: <Mic2 size={24} />,
      color: "text-cyan-400"
    },
    {
      id: 'kanban',
      title: "TaskFlow Kanban",
      description: "Gerenciador de tarefas estilo Kanban com funcionalidade Drag-and-Drop (simulada via botões). Organização intuitiva de fluxo de trabalho.",
      tags: ["React", "State Logic", "Tailwind", "CRUD"],
      demoComponent: <KanbanDemo />,
      icon: <Trello size={24} />,
      color: "text-purple-400"
    },
    {
      id: 'dash',
      title: "Dashboard Financeiro",
      description: "Painel administrativo completo para visualização de métricas financeiras. Inclui gráficos CSS interativos e indicadores de performance.",
      tags: ["React", "CSS Grid", "Data Viz", "Responsive"],
      demoComponent: <DashboardDemo />,
      icon: <Layout size={24} />,
      color: "text-green-400"
    }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <SectionTitle title="Demos Interativas" subtitle="Mini aplicações funcionais para explorar" icon={<Gauge size={28} />} />
      
      <div className="space-y-8">
        {demos.map((demo, index) => (
          <div key={demo.id} className="space-y-4">
            <div className="flex items-start gap-3">
              <div className={`${demo.color} flex-shrink-0 mt-1`}>{demo.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{demo.title}</h3>
                <p className="text-slate-400 mb-3">{demo.description}</p>
                <div className="flex flex-wrap gap-2">
                  {demo.tags.map(tag => (
                    <span key={tag} className={`px-3 py-1 rounded-full text-xs font-mono border ${index === 0 ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' : index === 1 ? 'bg-purple-500/10 text-purple-400 border-purple-500/30' : 'bg-green-500/10 text-green-400 border-green-500/30'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              {demo.demoComponent}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
