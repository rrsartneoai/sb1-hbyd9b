import { Activity, Clock, Users, Zap, ArrowRight, CheckCircle2, Calendar, MessageSquare } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Clock className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold">Bold New</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#benefits" className="text-gray-600 hover:text-indigo-600 transition-colors">Benefits</a>
              <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">Pricing</a>
            </div>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>
        </nav>

        <div className="container mx-auto px-6 pt-20 pb-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Transform Your Time,<br />Elevate Your Team
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            The intelligent time management platform that helps teams collaborate, automate, and achieve more together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="flex items-center justify-center space-x-2 bg-indigo-600 text-white px-8 py-4 rounded-full hover:bg-indigo-700 transition-colors">
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="flex items-center justify-center space-x-2 bg-white text-indigo-600 px-8 py-4 rounded-full border-2 border-indigo-600 hover:bg-indigo-50 transition-colors">
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Powerful Features for Modern Teams</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Activity className="h-8 w-8 text-indigo-600" />,
                title: "Task Management",
                description: "Create, assign, and track tasks with intuitive tools and visual workflows."
              },
              {
                icon: <Users className="h-8 w-8 text-indigo-600" />,
                title: "Team Collaboration",
                description: "Connect your team with integrated chat, file sharing, and real-time updates."
              },
              {
                icon: <Zap className="h-8 w-8 text-indigo-600" />,
                title: "Smart Automation",
                description: "Automate routine tasks and workflows to save time and reduce errors."
              },
              {
                icon: <Calendar className="h-8 w-8 text-indigo-600" />,
                title: "Visual Planning",
                description: "Plan and visualize projects with Kanban boards and Gantt charts."
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Why Teams Choose Bold New</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="space-y-8">
              {[
                "30% increase in team productivity",
                "Reduce meeting time by 50%",
                "Seamless integration with existing tools",
                "Real-time collaboration across time zones"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-indigo-600 rounded-2xl text-white p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to transform your team's productivity?</h2>
            <p className="text-xl mb-8 opacity-90">Join thousands of teams already using Bold New to achieve more.</p>
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Clock className="h-6 w-6 text-indigo-600" />
              <span className="font-bold">Bold New</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Terms</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;