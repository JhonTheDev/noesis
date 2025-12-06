import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/ScrollAnimation";
import { motion } from "framer-motion";
import { FileText, Brain, Video, Calendar, Clock, BarChart2 } from "lucide-react";

export default function Home() {
  const cortexFeatures = [
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "Resumos Inteligentes",
      description: "Condense qualquer material em resumos claros e objetivos, mantendo os pontos essenciais.",
      gradient: "from-cyan-400 to-blue-500",
      glow: "cyan"
    },
    {
      icon: <Brain className="w-6 h-6 text-white" />,
      title: "Mapas Mentais Automáticos",
      description: "Visualize conexões entre conceitos com mapas mentais gerados automaticamente pela IA.",
      gradient: "from-purple-400 to-magenta-500",
      glow: "purple"
    },
    {
      icon: <Video className="w-6 h-6 text-white" />,
      title: "Transcrição de Vídeos",
      description: "Transforme aulas em vídeo em textos estruturados e pesquisáveis instantaneamente.",
      gradient: "from-pink-400 to-purple-500",
      glow: "pink"
    }
  ];

  const atlasFeatures = [
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "Agenda Inteligente",
      description: "Planeje seus estudos com uma agenda que se adapta ao seu ritmo e prioridades.",
      gradient: "from-pink-400 to-red-500",
      glow: "pink"
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "Rotinas Personalizadas",
      description: "Crie e mantenha rotinas de estudo otimizadas para máxima retenção e produtividade.",
      gradient: "from-blue-400 to-cyan-500",
      glow: "cyan"
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-white" />,
      title: "Acompanhamento de Progresso",
      description: "Visualize sua evolução com métricas e insights sobre seu desempenho ao longo do tempo.",
      gradient: "from-green-400 to-emerald-500",
      glow: "green"
    }
  ];

  return (
     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <ScrollAnimation>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                  Noésis
                </span>
                <br/>
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
               <span> A Arte de Compreender </span>
              </h2>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">Pare de estudar mais. Comece a estudar melhor.</p>
            </ScrollAnimation>

            {/* Glass mockup container */}
            <ScrollAnimation delay={200}>
              <div className="mt-12 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-magenta-500 rounded-3xl opacity-20 blur-2xl"></div>
                <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl hover:border-cyan-400/50 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-blue-600/40 to-purple-600/40 rounded-2xl flex items-center justify-center border border-white/10 relative overflow-hidden group">
                    {/* Animated background */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-magenta-500/20 animate-shimmer"></div>
                    </div>

                    <div className="text-center relative z-10">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center animate-pulse">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <p className="text-slate-300 font-medium">Interface Córtex + Atlas</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* CTA Buttons */}
            <ScrollAnimation delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">                
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all transform hover:scale-105">
                  Comece com Noésis
                </Button>
                <Button variant="outline" className="border-white/30 hover:bg-white/10 text-white rounded-full px-8 py-6 text-lg font-semibold transition-all transform hover:scale-105">
                  Teste Atlas
                </Button>        
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Córtex Section */}
        <section id="cortex" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    Córtex
                  </span>
                </h2>
                <p className="text-slate-400 text-lg">Inteligência no Processamento de Conteúdo</p>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-3 gap-6">
              {cortexFeatures.map((feature, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <div className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:scale-105 duration-300">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Atlas Section */}
        <section id="atlas" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    Atlas
                  </span>
                </h2>
                <p className="text-slate-400 text-lg">Organize e Gerencie Seu Aprendizado</p>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-3 gap-6">
              {atlasFeatures.map((feature, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <div className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:scale-105 duration-300">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Neura Section */}
        <section id="neura" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation>
                <div className="space-y-6">
                  <h2 className="text-4xl sm:text-5xl font-bold">
                    <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                      O Poder da
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                      Neura
                    </span>
                  </h2>
                  <p className="text-slate-400 text-lg">Seu Assistente Cognitivo Pessoal</p>

                  <p className="text-slate-300 leading-relaxed">
                    Neura é a inteligência artificial que une Córtex e Atlas, compreendendo seu estilo de aprendizado e adaptando-se às suas necessidades. Ela não apenas organiza seu conteúdo, mas aprende com você para oferecer recomendações cada vez mais precisas.
                  </p>

                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all transform hover:scale-105 w-fit">
                    Descubra a Neura
                  </Button>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={200}>
                <div className="relative h-96 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-magenta-500/20 rounded-full blur-3xl animate-glow-pulse"></div>
                  <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-cyan-400/30 to-purple-500/30 border border-white/20 flex items-center justify-center backdrop-blur-xl shadow-2xl shadow-purple-500/50 animate-float">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-300 to-purple-400 flex items-center justify-center animate-pulse">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <ScrollAnimation>
              <h2 className="text-4xl sm:text-5xl font-bold">
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Pronto para Transformar
                </span>
                <br />
                <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Seu Aprendizado?
                </span>
              </h2>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Junte-se a milhares de estudantes que já descobriram a arte de compreender.
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all transform hover:scale-105">
                  Comece Gratuitamente
                </Button>
                <Button variant="outline" className="border-white/30 hover:bg-white/10 text-white rounded-full px-8 py-6 text-lg font-semibold transition-all transform hover:scale-105">
                  Ver Demonstração
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 backdrop-blur-md bg-white/5 py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Noesis
                </h3>
                <p className="text-slate-400 text-sm">A Arte de Compreender</p>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-white">Produto</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Recursos</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Preços</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Demonstração</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-white">Empresa</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Sobre</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Carreiras</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-white">Suporte</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Ajuda</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Contato</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacidade</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 text-center text-slate-400 text-sm">
              <p>© 2025 Noesis. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}