import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import {
    CheckCircle,
    Users,
    Calendar,
    BookOpen,
    BarChart3,
    MessageSquare,
    Shield,
    Sparkles,
    LineChart,
    Clock,
  } from "lucide-react"
  
  import { ThemeToggle } from '@/components/landing/theme-toggle';
  import { MobileMenu } from '@/components/landing/mobile-menu';
  import { Button } from '@headlessui/react';
  import { Badge } from 'lucide-react';
  import { Avatar } from '@radix-ui/react-avatar';
  import { SectionHeading } from '@/components/landing/section-heading';
  import { FeatureCard } from '@/components/landing/feauture-card';
  import { Card ,CardHeader , CardTitle , CardDescription ,CardContent } from '@/components/ui/card';
  import { TestimonialCard } from '@/components/landing/testimonial-card';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    return (
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-xl text-edu-600">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-edu-50 dark:bg-edu-900/30">
                  <BookOpen className="h-5 w-5 text-edu-600 dark:text-edu-400" />
                </div>
                <span>EduGestión</span>
              </div>
              <nav className="hidden md:flex gap-6">
                <Link href="#caracteristicas" className="text-sm font-medium hover:text-edu-600 transition-colors">
                  Características
                </Link>
                <Link href="#precios" className="text-sm font-medium hover:text-edu-600 transition-colors">
                  Precios
                </Link>
                <Link href="#testimonios" className="text-sm font-medium hover:text-edu-600 transition-colors">
                  Testimonios
                </Link>
                <Link href="#contacto" className="text-sm font-medium hover:text-edu-600 transition-colors">
                  Contacto
                </Link>
              </nav>
              <div className="flex items-center gap-4">
                <Link href="/login" className="hidden md:block text-sm font-medium hover:text-edu-600 transition-colors">
                  Iniciar sesión
                </Link>
                <ThemeToggle />
                <Button asChild className="bg-edu-600 hover:bg-edu-700 text-white">
                  <Link href="/registro">Prueba gratuita</Link>
                </Button>
                <MobileMenu
                  items={[
                    { title: "Características", href: "#caracteristicas" },
                    { title: "Precios", href: "#precios" },
                    { title: "Testimonios", href: "#testimonios" },
                    { title: "Contacto", href: "#contacto" },
                  ]}
                />
              </div>
            </div>
          </header>
          <main className="flex-1">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 bg-gradient-to-b from-edu-50/50 to-background dark:from-edu-950/30 dark:to-background">
              <div className="container px-4 md:px-6 relative">
                <div className="grid gap-16 lg:grid-cols-2 items-center">
                  <div className="flex flex-col gap-8">
                    <Badge variant="edu" className="w-fit">
                      Plataforma de Gestión Escolar
                    </Badge>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-6xl text-edu-700 dark:text-edu-400">
                      Transforma la gestión de tu institución educativa
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-[600px] leading-relaxed">
                      Automatiza procesos administrativos, académicos y de comunicación con nuestra plataforma integral
                      diseñada para escuelas y colegios.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-2">
                      <Button asChild size="lg" className="bg-edu-600 hover:bg-edu-700 text-white">
                        <Link href="/registro">Comenzar prueba gratuita</Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-edu-200 hover:bg-edu-50 dark:border-gray-700 dark:hover:bg-gray-800"
                      >
                        <Link href="/demo">Ver demostración</Link>
                      </Button>
                    </div>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="inline-block h-10 w-10 rounded-full ring-2 ring-background overflow-hidden"
                          >
                            <Avatar
                              //src={`/placeholder.svg?height=40&width=40&text=${i}`}
                              //width={40}
                              //height={40}
                              //alt={`Usuario ${i}`}
                             // className="h-full w-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">+500</span> instituciones confían en nosotros
                      </div>
                    </div>
                  </div>
                  <div className="relative lg:ml-auto">
                    <div className="relative mx-auto w-full max-w-[600px]">
                      <div className="relative overflow-hidden rounded-xl border shadow-sm">
                        <div className="absolute inset-0 bg-gradient-to-tr from-edu-500/10 to-accent1-500/10 mix-blend-overlay"></div>
                        <Avatar
                        //   src="/placeholder.svg?height=600&width=800&text=Dashboard+EduGestión"
                        //   width={800}
                        //   height={600}
                        //   alt="Dashboard de EduGestión"
                        //   className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    
            {/* Logos Section */}
            <section className="py-12 border-y bg-muted/30">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                  <h2 className="text-xl font-medium text-muted-foreground">Instituciones que confían en nosotros</h2>
                  <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-center justify-center">
                        <Avatar
                        //   src={`/placeholder.svg?height=40&width=120&text=Logo+${i}`}
                        //   width={120}
                        //   height={40}
                        //   alt={`Logo ${i}`}
                        //   className="h-8 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
    
            {/* Features Section */}
            <section id="caracteristicas" className="py-24 md:py-32">
              <div className="container px-4 md:px-6">
                <SectionHeading
                  badge="Características"
                  title="Todo lo que necesitas para una gestión educativa eficiente"
                  description="Nuestra plataforma ofrece soluciones completas para cada aspecto de la gestión escolar, desde la administración hasta la comunicación."
                  centered
                  className="max-w-3xl mx-auto mb-20"
                />
    
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <FeatureCard
                    icon={Users}
                    title="Gestión de Estudiantes"
                    description="Administra expedientes, asistencia y seguimiento académico de forma centralizada y eficiente."
                  />
                  <FeatureCard
                    icon={Calendar}
                    title="Planificación Académica"
                    description="Organiza horarios, cursos y recursos educativos con herramientas intuitivas y flexibles."
                  />
                  <FeatureCard
                    icon={BarChart3}
                    title="Informes y Análisis"
                    description="Obtén estadísticas e informes detallados para tomar decisiones basadas en datos."
                  />
                  <FeatureCard
                    icon={MessageSquare}
                    title="Comunicación Integrada"
                    description="Facilita la comunicación entre profesores, estudiantes y padres con herramientas centralizadas."
                  />
                  <FeatureCard
                    icon={Shield}
                    title="Seguridad y Acceso"
                    description="Control de acceso y protección de datos con roles y permisos personalizables."
                  />
                  <FeatureCard
                    icon={BookOpen}
                    title="Recursos Educativos"
                    description="Centraliza y comparte materiales didácticos y recursos de aprendizaje en un solo lugar."
                  />
                </div>
    
                <div className="mt-24 lg:mt-40">
                  <div className="grid gap-16 lg:grid-cols-2 items-center">
                    <div className="order-2 lg:order-1">
                      <SectionHeading
                        badge="Plataforma Integral"
                        title="Una solución completa para tu institución educativa"
                        description="EduGestión integra todas las herramientas que necesitas para gestionar tu institución de manera eficiente, ahorrando tiempo y recursos."
                        className="mb-10"
                      />
    
                      <div className="space-y-8">
                        {[
                          {
                            icon: Clock,
                            title: "Ahorra tiempo",
                            description: "Automatiza tareas repetitivas y procesos administrativos.",
                          },
                          {
                            icon: LineChart,
                            title: "Mejora el rendimiento",
                            description: "Analiza datos académicos para identificar áreas de mejora.",
                          },
                          {
                            icon: Sparkles,
                            title: "Experiencia personalizada",
                            description: "Adapta la plataforma a las necesidades específicas de tu institución.",
                          },
                        ].map((item, i) => (
                          <div key={i} className="flex gap-5">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-edu-100 dark:bg-edu-900/30 text-edu-600 dark:text-edu-400">
                              <item.icon className="h-6 w-6" />
                            </div>
                            <div>
                              <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                              <p className="text-muted-foreground">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative order-1 lg:order-2">
                      <div className="relative mx-auto w-full max-w-[550px]">
                        <div className="relative overflow-hidden rounded-xl border shadow-sm">
                          <div className="absolute inset-0 bg-gradient-to-br from-edu-500/10 to-accent1-500/10 mix-blend-overlay"></div>
                          <Avatar
                            // src="/placeholder.svg?height=600&width=800&text=Plataforma+Integral"
                            // width={800}
                            // height={600}
                            // alt="Plataforma Integral"
                            // className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    
            {/* Stats Section */}
            <section className="py-24 bg-gradient-to-r from-edu-50 via-edu-50/80 to-accent1-50/50 dark:from-edu-950/30 dark:via-edu-950/20 dark:to-accent1-950/20">
              <div className="container px-4 md:px-6">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    { value: "99%", label: "Satisfacción de clientes" },
                    { value: "500+", label: "Instituciones educativas" },
                    { value: "250,000+", label: "Estudiantes gestionados" },
                    { value: "45%", label: "Ahorro de tiempo administrativo" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-4xl md:text-5xl font-bold mb-3 text-edu-600 dark:text-edu-400">{stat.value}</div>
                      <div className="text-muted-foreground text-lg">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
    
            {/* Pricing Section */}
            <section id="precios" className="py-24 md:py-32">
              <div className="container px-4 md:px-6">
                <SectionHeading
                  badge="Precios"
                  title="Planes adaptados a tus necesidades"
                  description="Elige el plan que mejor se adapte al tamaño y necesidades de tu institución educativa."
                  centered
                  className="max-w-3xl mx-auto mb-20"
                />
    
                <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
                  <Card className="border-border/40 transition-all duration-200 hover:border-edu-300 hover:shadow-sm dark:hover:border-edu-800">
                    <CardHeader className="pb-8 pt-8">
                      <CardTitle className="text-2xl">Básico</CardTitle>
                      <CardDescription className="text-muted-foreground">Ideal para escuelas pequeñas</CardDescription>
                      <div className="mt-6 flex items-baseline text-edu-600 dark:text-edu-400">
                        <span className="text-4xl font-bold">$299</span>
                        <span className="ml-1 text-sm font-medium text-muted-foreground">/mes</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col pb-8">
                      <ul className="space-y-4 text-sm mb-8">
                        <li className="flex items-center">
                          <CheckCircle className="mr-3 h-5 w-5 text-edu-600 dark:text-edu-400" />
                          <span>Hasta 200 estudiantes</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-3 h-5 w-5 text-edu-600 dark:text-edu-400" />
                          <span>Gestión de estudiantes</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-3 h-5 w-5 text-edu-600 dark:text-edu-400" />
                          <span>Planificación básica</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-3 h-5 w-5 text-edu-600 dark:text-edu-400" />
                          <span>Soporte por email</span>
                        </li>
                      </ul>
                      <div className="mt-auto">
                        <Button className="w-full bg-white text-edu-600 border-edu-200 hover:bg-edu-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700">
                          Comenzar prueba gratuita
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
    
                  <Card className="border-edu-300 dark:border-edu-800 shadow-sm transition-all duration-200 hover:shadow-md lg:-mt-2 lg:mb-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 bg-gradient-to-r from-edu-500 to-edu-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                      Popular
                    </div>
                    <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-edu-500/10"></div>
                    <div className="absolute -right-20 -bottom-20 h-40 w-40 rounded-full bg-accent1-500/10"></div>
                    <CardHeader className="pb-8 pt-8 relative">
                      <CardTitle className="text-2xl">Profesional</CardTitle>
                      <CardDescription className="text-muted-foreground">Para instituciones en crecimiento</CardDescription>
                      <div className="mt-4 flex items-baseline text-edu-600 dark:text-edu-400">
                        <span className="text-4xl font-bold">$599</span>
                        <span className="ml-1 text-sm font-medium text-muted-foreground">/mes</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col pb-8 relative">
                      <ul className="space-y-3 text-sm mb-8">
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-edu-600 dark:text-edu-400" />
                          <span>Hasta 500 estudiantes</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-edu-600 dark:text-edu-400" />
                          <span>Todas las características básicas</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-edu-600 dark:text-edu-400" />
                          <span>Informes avanzados</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-edu-600 dark:text-edu-400" />
                          <span>Portal para padres</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-edu-600 dark:text-edu-400" />
                          <span>Soporte prioritario</span>
                        </li>
                      </ul>
                      <div className="mt-auto">
                        <Button className="w-full bg-edu-600 hover:bg-edu-700 text-white">Comenzar prueba gratuita</Button>
                      </div>
                    </CardContent>
                  </Card>
    
                  <Card className="border-border/40 transition-all duration-200 hover:border-edu-300 hover:shadow-sm dark:hover:border-edu-800">
                    <CardHeader className="pb-8 pt-8">
                      <CardTitle className="text-2xl">Enterprise</CardTitle>
                      <CardDescription className="text-muted-foreground">Para grandes instituciones</CardDescription>
                      <div className="mt-4 flex items-baseline text-edu-600 dark:text-edu-400">
                        <span className="text-4xl font-bold">Personalizado</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col pb-8">
                      <ul className="space-y-3 text-sm mb-8">
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-edu-600 dark:text-edu-400" />
                          <span>Estudiantes ilimitados</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-edu-600 dark:text-edu-400" />
                          <span>Todas las características profesionales</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-edu-600 dark:text-edu-400" />
                          <span>Integraciones personalizadas</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-edu-600 dark:text-edu-400" />
                          <span>Implementación asistida</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-edu-600 dark:text-edu-400" />
                          <span>Soporte 24/7</span>
                        </li>
                      </ul>
                      <div className="mt-auto">
                        <Button className="w-full bg-white text-edu-600 border-edu-200 hover:bg-edu-50 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700">
                          Contactar ventas
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
    
            {/* Testimonials Section */}
            <section id="testimonios" className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30">
              <div className="container px-4 md:px-6">
                <SectionHeading
                  badge="Testimonios"
                  title="Lo que dicen nuestros clientes"
                  description="Descubre cómo EduGestión ha transformado la administración escolar de nuestros clientes."
                  centered
                  className="max-w-3xl mx-auto mb-20"
                />
    
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      quote:
                        "EduGestión ha revolucionado la forma en que administramos nuestra escuela. Ahora podemos dedicar más tiempo a lo que realmente importa: la educación de nuestros estudiantes.",
                      author: "María Rodríguez",
                      role: "Directora, Colegio San José",
                    },
                    {
                      quote:
                        "La comunicación con los padres ha mejorado significativamente desde que implementamos EduGestión. Los padres ahora están más involucrados en el proceso educativo.",
                      author: "Carlos Méndez",
                      role: "Coordinador Académico, Instituto Tecnológico",
                    },
                    {
                      quote:
                        "La generación automática de informes nos ahorra horas de trabajo cada semana. Podemos tomar decisiones basadas en datos de manera más rápida y efectiva.",
                      author: "Ana Gómez",
                      role: "Administradora, Escuela Nueva Era",
                    },
                  ].map((testimonial, i) => (
                    <TestimonialCard
                      key={i}
                      quote={testimonial.quote}
                      author={testimonial.author}
                      role={testimonial.role}
                      index={i}
                    />
                  ))}
                </div>
              </div>
            </section>
    
            {/* CTA Section */}
            <section
              id="contacto"
              className="py-24 md:py-32 bg-gradient-to-b from-edu-50/50 to-background dark:from-edu-950/30 dark:to-background border-t"
            >
              <div className="container px-4 md:px-6">
                <div className="grid gap-16 lg:grid-cols-2 items-center">
                  <div>
                    <SectionHeading
                      badge="Comienza hoy"
                      title="¿Listo para transformar la gestión de tu institución?"
                      description="Contáctanos hoy mismo para una demostración personalizada o para comenzar tu prueba gratuita de 14 días sin compromiso."
                      className="mb-10"
                    />
    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild size="lg" className="bg-edu-600 hover:bg-edu-700 text-white">
                        <Link href="/registro">Comenzar prueba gratuita</Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="border-edu-200 hover:bg-edu-50 dark:border-gray-700 dark:hover:bg-gray-800"
                      >
                        <Link href="/demo">Solicitar demostración</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="relative mx-auto w-full max-w-md">
                    <Card className="overflow-hidden border shadow-sm">
                      <CardHeader className="bg-gradient-to-r from-edu-600 to-edu-500 text-white pb-8 pt-8">
                        <CardTitle className="text-2xl">Solicita información</CardTitle>
                        <CardDescription className="text-edu-100 mt-2">
                          Completa el formulario y te contactaremos
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-8 pb-8">
                        <form className="space-y-6">
                          <div className="grid gap-6">
                            <div className="grid gap-2">
                              <label htmlFor="name" className="text-sm font-medium">
                                Nombre completo
                              </label>
                              <input
                                id="name"
                                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Juan Pérez"
                              />
                            </div>
                            <div className="grid gap-2">
                              <label htmlFor="email" className="text-sm font-medium">
                                Correo electrónico
                              </label>
                              <input
                                id="email"
                                type="email"
                                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="juan@ejemplo.com"
                              />
                            </div>
                            <div className="grid gap-2">
                              <label htmlFor="institution" className="text-sm font-medium">
                                Institución
                              </label>
                              <input
                                id="institution"
                                className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Nombre de la institución"
                              />
                            </div>
                          </div>
                          <Button className="w-full bg-edu-600 hover:bg-edu-700 text-white h-11">Enviar solicitud</Button>
                        </form>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <footer className="w-full border-t bg-background">
            <div className="container flex flex-col gap-12 py-16 px-4 md:px-6 md:flex-row md:justify-between">
              <div className="flex flex-col gap-6 md:w-1/3">
                <div className="flex items-center gap-3 font-bold text-xl text-edu-600">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-edu-50 dark:bg-edu-900/30">
                    <BookOpen className="h-5 w-5 text-edu-600 dark:text-edu-400" />
                  </div>
                  <span>EduGestión</span>
                </div>
                <p className="text-muted-foreground max-w-md leading-relaxed">
                  Simplificando la gestión escolar para que puedas centrarte en lo que realmente importa: la educación de
                  tus estudiantes.
                </p>
                <div className="flex gap-4 mt-2">
                  {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                    <Link
                      key={social}
                      href={`#${social}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-edu-50 text-edu-500 hover:bg-edu-100 hover:text-edu-600 dark:bg-gray-800/50 dark:text-edu-400 dark:hover:bg-gray-800 dark:hover:text-edu-300 transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        {social === "twitter" && (
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        )}
                        {social === "facebook" && (
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        )}
                        {social === "instagram" && (
                          <>
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                          </>
                        )}
                        {social === "linkedin" && (
                          <>
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect width="4" height="12" x="2" y="9"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </>
                        )}
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 md:flex-1">
                <div className="space-y-6">
                  <h3 className="text-base font-medium">Producto</h3>
                  <ul className="space-y-4 text-sm">
                    <li>
                      <Link href="#caracteristicas" className="text-muted-foreground hover:text-edu-600 transition-colors">
                        Características
                      </Link>
                    </li>
                    <li>
                      <Link href="#precios" className="text-muted-foreground hover:text-edu-600 transition-colors">
                        Precios
                      </Link>
                    </li>
                    <li>
                      <Link href="/demo" className="text-muted-foreground hover:text-edu-600 transition-colors">
                        Demostración
                      </Link>
                    </li>
                    <li>
                      <Link href="/roadmap" className="text-muted-foreground hover:text-edu-600 transition-colors">
                        Roadmap
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h3 className="text-base font-medium">Empresa</h3>
                  <ul className="space-y-4 text-sm">
                    <li>
                      <Link href="/nosotros" className="text-muted-foreground hover:text-edu-600 transition-colors">
                        Sobre nosotros
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="text-muted-foreground hover:text-edu-600 transition-colors">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/contacto" className="text-muted-foreground hover:text-edu-600 transition-colors">
                        Contacto
                      </Link>
                    </li>
                    <li>
                      <Link href="/empleos" className="text-muted-foreground hover:text-edu-600 transition-colors">
                        Empleos
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h3 className="text-base font-medium">Legal</h3>
                  <ul className="space-y-4 text-sm">
                    <li>
                      <Link href="/privacidad" className="text-muted-foreground hover:text-edu-600 transition-colors">
                        Política de privacidad
                      </Link>
                    </li>
                    <li>
                      <Link href="/terminos" className="text-muted-foreground hover:text-edu-600 transition-colors">
                        Términos de servicio
                      </Link>
                    </li>
                    <li>
                      <Link href="/cookies" className="text-muted-foreground hover:text-edu-600 transition-colors">
                        Política de cookies
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="container flex flex-col gap-4 py-8 px-4 md:flex-row md:items-center md:justify-between md:px-6 border-t">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} EduGestión. Todos los derechos reservados.
              </p>
              <p className="text-sm text-muted-foreground">
                Diseñado y desarrollado con <span className="text-red-500">❤</span> para instituciones educativas
              </p>
            </div>
          </footer>
        </div>
      )
}
