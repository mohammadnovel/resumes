<template>
  <div class="bg-gray-950 text-white">
    <!-- Progress Bar -->
    <div class="fixed top-0 left-0 w-full h-1 bg-gray-900 z-[100]">
      <div
        class="h-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-300"
        :style="{ width: scrollProgress + '%' }"
      ></div>
    </div>

    <!-- Navigation -->
    <nav
      class="fixed top-0 w-full z-50 transition-all duration-300"
      :class="
        isScrolled
          ? 'bg-gray-950/95 backdrop-blur-xl border-b border-gray-800 shadow-xl'
          : 'bg-transparent'
      "
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <a
            href="#hero"
            @click.prevent="scrollToSection('hero')"
            class="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent cursor-pointer"
          >
            Monvear
          </a>

          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center gap-6 lg:gap-8">
            <a
              v-for="item in navigation"
              :key="item.id"
              @click.prevent="scrollToSection(item.id)"
              class="text-sm font-medium cursor-pointer transition-colors"
              :class="
                activeSection === item.id
                  ? 'text-blue-400'
                  : 'text-gray-400 hover:text-white'
              "
            >
              {{ item.label }}
            </a>
            <a
              @click.prevent="scrollToSection('contact')"
              class="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-all cursor-pointer"
            >
              Contact
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2"
          >
            <Icon
              :name="mobileMenuOpen ? 'mdi:close' : 'mdi:menu'"
              class="text-2xl"
            />
          </button>
        </div>

        <!-- Mobile Menu -->
        <transition name="slide-down">
          <div
            v-if="mobileMenuOpen"
            class="md:hidden py-4 space-y-3 border-t border-gray-800"
          >
            <a
              v-for="item in navigation"
              :key="item.id"
              @click.prevent="
                scrollToSection(item.id);
                mobileMenuOpen = false;
              "
              class="block text-sm font-medium cursor-pointer transition-colors"
              :class="
                activeSection === item.id
                  ? 'text-blue-400'
                  : 'text-gray-400 hover:text-white'
              "
            >
              {{ item.label }}
            </a>
            <a
              @click.prevent="
                scrollToSection('contact');
                mobileMenuOpen = false;
              "
              class="block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-all cursor-pointer text-center"
            >
              Contact
            </a>
          </div>
        </transition>
      </div>
    </nav>

    <!-- Hero Section -->
    <section
      id="hero"
      class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
    >
      <!-- Animated Background -->
      <div class="absolute inset-0 -z-10">
        <div
          class="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
        ></div>
        <div
          class="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"
          style="animation-delay: 1s"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto w-full">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Left Content -->
          <div class="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <!-- Badge -->
            <div
              class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm backdrop-blur-sm"
            >
              <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>Available for opportunities</span>
            </div>

            <!-- Main Heading -->
            <div class="space-y-4">
              <h1
                class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
              >
                <span class="block text-white">Hi, I'm</span>
                <span
                  class="block bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent"
                >
                  Moh. Novel AR
                </span>
              </h1>
              <div
                class="flex items-center justify-center lg:justify-start gap-3"
              >
                <div
                  class="h-1 w-12 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"
                ></div>
                <h2
                  class="text-xl sm:text-2xl md:text-3xl text-gray-400 font-light"
                >
                  Backend Developer
                </h2>
              </div>
            </div>

            <!-- Description -->
            <p
              class="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Building
              <span class="text-blue-400 font-semibold">scalable</span> and
              <span class="text-violet-400 font-semibold"
                >high-performance</span
              >
              web applications with
              <span class="text-green-400 font-semibold">6+ years</span> of
              experience.
            </p>

            <!-- Tech Stack Preview -->
            <div class="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div
                class="px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-800 text-sm text-gray-400 flex items-center gap-2 hover:border-green-500/50 transition-all"
              >
                <Icon name="mdi:nodejs" class="text-lg text-green-400" />
                Node.js
              </div>
              <div
                class="px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-800 text-sm text-gray-400 flex items-center gap-2 hover:border-red-500/50 transition-all"
              >
                <Icon name="mdi:laravel" class="text-lg text-red-400" />
                Laravel
              </div>
              <div
                class="px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-800 text-sm text-gray-400 flex items-center gap-2 hover:border-blue-500/50 transition-all"
              >
                <Icon name="mdi:database" class="text-lg text-blue-400" />
                SQL & NoSql
              </div>
              <div
                class="px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-800 text-sm text-gray-400 flex items-center gap-2 hover:border-emerald-500/50 transition-all"
              >
                <Icon name="mdi:vuejs" class="text-lg text-emerald-400" />
                Vue.js
              </div>
            </div>

            <!-- CTA Buttons -->
            <div
              class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                @click.prevent="scrollToSection('projects')"
                class="group px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 rounded-xl font-semibold transition-all hover:shadow-2xl hover:shadow-blue-500/50 inline-flex items-center justify-center gap-2 cursor-pointer transform hover:scale-105"
              >
                <Icon name="mdi:briefcase-outline" class="text-xl" />
                View My Work
                <Icon
                  name="mdi:arrow-right"
                  class="text-xl group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                @click.prevent="scrollToSection('contact')"
                class="px-8 py-4 border-2 border-gray-700 hover:border-blue-500 rounded-xl font-semibold transition-all inline-flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-900/50 backdrop-blur-sm"
              >
                <Icon name="mdi:email-outline" class="text-xl" />
                Let's Talk
              </a>
            </div>

            <!-- Social Links -->
            <div class="flex gap-3 justify-center lg:justify-start pt-4">
              <a
                href="https://github.com/mohammadnovel"
                target="_blank"
                class="w-11 h-11 flex items-center justify-center rounded-lg bg-gray-900/50 border border-gray-800 hover:border-blue-500 hover:bg-gray-800 transition-all hover:scale-110"
              >
                <Icon name="mdi:github" class="text-xl" />
              </a>
              <a
                href="https://linkedin.com/in/moh-novel"
                target="_blank"
                class="w-11 h-11 flex items-center justify-center rounded-lg bg-gray-900/50 border border-gray-800 hover:border-blue-500 hover:bg-gray-800 transition-all hover:scale-110"
              >
                <Icon name="mdi:linkedin" class="text-xl" />
              </a>
              <a
                href="mailto:moh.novelar@gmail.com"
                class="w-11 h-11 flex items-center justify-center rounded-lg bg-gray-900/50 border border-gray-800 hover:border-blue-500 hover:bg-gray-800 transition-all hover:scale-110"
              >
                <Icon name="mdi:email" class="text-xl" />
              </a>
              <a
                href="https://wa.me/6283819751818"
                target="_blank"
                class="w-11 h-11 flex items-center justify-center rounded-lg bg-gray-900/50 border border-gray-800 hover:border-green-500 hover:bg-gray-800 transition-all hover:scale-110"
              >
                <Icon name="mdi:whatsapp" class="text-xl" />
              </a>
            </div>
          </div>

          <!-- Right Illustration - Improved Modern Design -->
          <div class="relative order-1 lg:order-2">
            <div class="relative w-full max-w-lg mx-auto">
              <!-- Floating Particles Background -->
              <div class="absolute inset-0 overflow-hidden rounded-3xl">
                <div
                  class="absolute top-10 right-10 w-3 h-3 bg-blue-400 rounded-full animate-ping"
                ></div>
                <div
                  class="absolute bottom-20 left-10 w-2 h-2 bg-violet-400 rounded-full animate-ping"
                  style="animation-delay: 0.5s"
                ></div>
                <div
                  class="absolute top-1/2 right-5 w-2 h-2 bg-green-400 rounded-full animate-ping"
                  style="animation-delay: 1s"
                ></div>
              </div>

              <!-- Main Card Container -->
              <div
                class="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-gray-700/50 p-6 sm:p-8 shadow-2xl"
              >
                <!-- Gradient Mesh Background -->
                <div class="absolute inset-0 opacity-30">
                  <div
                    class="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-violet-500/20"
                  ></div>
                </div>

                <!-- Content -->
                <div class="relative z-10 space-y-6">
                  <!-- Profile Card with Avatar -->
                  <div class="relative group">
                    <!-- Glow Effect -->
                    <div
                      class="absolute -inset-1 bg-gradient-to-r from-blue-500/50 to-violet-500/50 rounded-2xl blur-xl group-hover:blur-2xl transition-all"
                    ></div>

                    <!-- Card -->
                    <div
                      class="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700/50"
                    >
                      <!-- Avatar Circle -->
                      <div class="w-32 h-32 mx-auto mb-4 relative">
                        <div
                          class="absolute inset-0 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full animate-pulse"
                        ></div>
                        <div
                          class="absolute inset-1 bg-gray-900 rounded-full flex items-center justify-center"
                        >
                          <Icon
                            name="mdi:account-circle"
                            class="text-7xl text-blue-400"
                          />
                        </div>
                      </div>

                      <!-- Production Ready Badge -->
                      <div
                        class="flex items-center justify-center gap-2 bg-green-500/10 border border-green-500/30 rounded-lg py-2 px-3"
                      >
                        <Icon
                          name="mdi:check-decagram"
                          class="text-green-400 text-xl"
                        />
                        <div class="text-left">
                          <div class="text-sm font-semibold text-green-400">
                            Production Ready
                          </div>
                          <div class="text-xs text-gray-400">Scalable Apps</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Tech Icons Grid - 3D Style -->
                  <div class="grid grid-cols-4 gap-3">
                    <div
                      class="aspect-square rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center hover:border-green-500/50 hover:scale-110 hover:rotate-3 transition-all cursor-pointer group relative overflow-hidden"
                    >
                      <div
                        class="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/10 group-hover:to-transparent transition-all"
                      ></div>
                      <Icon
                        name="mdi:nodejs"
                        class="text-3xl text-green-400 relative z-10"
                      />
                    </div>
                    <div
                      class="aspect-square rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center hover:border-red-500/50 hover:scale-110 hover:rotate-3 transition-all cursor-pointer group relative overflow-hidden"
                    >
                      <div
                        class="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/10 group-hover:to-transparent transition-all"
                      ></div>
                      <Icon
                        name="mdi:laravel"
                        class="text-3xl text-red-400 relative z-10"
                      />
                    </div>
                    <div
                      class="aspect-square rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center hover:border-emerald-500/50 hover:scale-110 hover:rotate-3 transition-all cursor-pointer group relative overflow-hidden"
                    >
                      <div
                        class="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:to-transparent transition-all"
                      ></div>
                      <Icon
                        name="mdi:vuejs"
                        class="text-3xl text-emerald-400 relative z-10"
                      />
                    </div>
                    <div
                      class="aspect-square rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center hover:border-blue-500/50 hover:scale-110 hover:rotate-3 transition-all cursor-pointer group relative overflow-hidden"
                    >
                      <div
                        class="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-transparent transition-all"
                      ></div>
                      <Icon
                        name="mdi:database"
                        class="text-3xl text-blue-400 relative z-10"
                      />
                    </div>
                    <div
                      class="aspect-square rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center hover:border-blue-500/50 hover:scale-110 hover:rotate-3 transition-all cursor-pointer group relative overflow-hidden"
                    >
                      <div
                        class="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-transparent transition-all"
                      ></div>
                      <Icon
                        name="mdi:docker"
                        class="text-3xl text-blue-500 relative z-10"
                      />
                    </div>
                    <div
                      class="aspect-square rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center hover:border-orange-500/50 hover:scale-110 hover:rotate-3 transition-all cursor-pointer group relative overflow-hidden"
                    >
                      <div
                        class="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-transparent transition-all"
                      ></div>
                      <Icon
                        name="mdi:git"
                        class="text-3xl text-orange-400 relative z-10"
                      />
                    </div>
                    <div
                      class="aspect-square rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center hover:border-blue-500/50 hover:scale-110 hover:rotate-3 transition-all cursor-pointer group relative overflow-hidden"
                    >
                      <div
                        class="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-blue-400/0 group-hover:from-blue-400/10 group-hover:to-transparent transition-all"
                      ></div>
                      <Icon
                        name="mdi:language-php"
                        class="text-3xl text-blue-400 relative z-10"
                      />
                    </div>
                    <div
                      class="aspect-square rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center hover:border-purple-500/50 hover:scale-110 hover:rotate-3 transition-all cursor-pointer group relative overflow-hidden"
                    >
                      <div
                        class="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all"
                      ></div>
                      <Icon
                        name="mdi:api"
                        class="text-3xl text-purple-400 relative z-10"
                      />
                    </div>
                  </div>
                </div>

                <!-- Decorative Corner Elements -->
                <div class="absolute top-4 right-4">
                  <Icon
                    name="mdi:lightning-bolt"
                    class="text-2xl text-yellow-400 animate-pulse"
                  />
                </div>
              </div>

              <!-- Floating Achievement Card - Fast Delivery -->
              <div
                class="absolute -right-4 bottom-16 hidden xl:block animate-float"
                style="animation-delay: 0.3s"
              >
                <div
                  class="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 rounded-xl p-4 shadow-2xl backdrop-blur-sm"
                >
                  <div class="flex items-center gap-3">
                    <div
                      class="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-lg flex items-center justify-center"
                    >
                      <Icon
                        name="mdi:rocket-launch"
                        class="text-2xl text-blue-400"
                      />
                    </div>
                    <div>
                      <div class="text-sm font-bold text-white">
                        Fast Delivery
                      </div>
                      <div class="text-xs text-gray-400">Agile Method</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Decorative Elements -->
              <div
                class="absolute -top-8 -right-8 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"
              ></div>
              <div
                class="absolute -bottom-8 -left-8 w-40 h-40 bg-violet-500/5 rounded-full blur-2xl"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section
      id="about"
      class="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50"
    >
      <div class="max-w-6xl mx-auto">
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center lg:text-left"
        >
          About Me
        </h2>
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div
            class="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base"
          >
            <p>
              I'm a Backend Developer with over 6 years of experience building
              scalable and high-performance web applications. I specialize in
              Node.js, Laravel, and database management with PostgreSQL,
              MongoDB, and MySQL.
            </p>
            <p>
              Throughout my career, I've worked across various domains including
              logistics, education, retail, and government sectors. I'm
              passionate about clean code, efficient architectures, and
              translating complex business requirements into robust technical
              solutions.
            </p>
          </div>
          <div
            class="space-y-4 text-gray-400 leading-relaxed text-sm sm:text-base"
          >
            <p>
              Currently working at PT. Japfa Comfeed Indonesia, where I develop
              livestock management systems with SAP integration, and actively
              taking on freelance projects.
            </p>
            <p>
              I believe in continuous learning and staying updated with the
              latest technologies to deliver the best solutions for modern web
              applications.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section
      id="skills"
      class="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50"
    >
      <div class="max-w-6xl mx-auto">
        <!-- Section Header dengan Animasi -->
        <div class="text-center lg:text-left mb-12" ref="skillsHeaderRef">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-4"
            :class="{ 'animate-fade-in': skillsHeaderVisible }"
          >
            <Icon name="mdi:code-braces" class="text-lg" />
            <span>What I'm good at</span>
          </div>

          <h2
            class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            :class="{ 'animate-slide-up': skillsHeaderVisible }"
          >
            Skills &
            <span
              class="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"
            >
              Technologies
            </span>
          </h2>

          <p
            class="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0"
            :class="{ 'animate-slide-up': skillsHeaderVisible }"
            style="animation-delay: 100ms"
          >
            A comprehensive toolkit I've mastered through years of hands-on
            experience building robust applications.
          </p>
        </div>

        <!-- Skills Grid dengan Stagger Animation -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <SkillCard
            v-for="(category, index) in skills"
            :key="category.title"
            :title="category.title"
            :skills="category.items"
            :icon="category.icon"
            :style="{ animationDelay: `${index * 100}ms` }"
          />
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section
      id="experience"
      class="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50"
    >
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center lg:text-left mb-8">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm mb-4"
          >
            <Icon name="mdi:briefcase-outline" class="text-lg" />
            <span>Professional Journey</span>
          </div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Work
            <span
              class="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"
            >
              Experience
            </span>
          </h2>

          <p
            class="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0"
          >
            {{ calculateTotalYears() }} years of building robust applications
            across various industries including logistics, education, retail,
            and government sectors.
          </p>
        </div>

        <!-- Filter Tabs -->
        <div class="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
          <button
            @click="experienceFilter = 'all'"
            :class="
              experienceFilter === 'all'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            "
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all"
          >
            All ({{ experiences.length }})
          </button>
          <button
            @click="experienceFilter = 'current'"
            :class="
              experienceFilter === 'current'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            "
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all"
          >
            Current ({{ experiences.filter((e) => e.current).length }})
          </button>
          <button
            @click="experienceFilter = 'freelance'"
            :class="
              experienceFilter === 'freelance'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            "
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all"
          >
            Freelance
          </button>
          <button
            @click="experienceFilter = 'fulltime'"
            :class="
              experienceFilter === 'fulltime'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            "
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all"
          >
            Full-time
          </button>
        </div>

        <!-- Timeline -->
        <div class="space-y-0 mb-12">
          <ExperienceCard
            v-for="(exp, index) in filteredExperiences"
            :key="index"
            v-bind="exp"
          />
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section
      id="projects"
      class="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50"
    >
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div class="text-center lg:text-left mb-8">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm mb-4"
          >
            <Icon name="mdi:rocket-launch" class="text-lg" />
            <span>Portfolio Showcase</span>
          </div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured
            <span
              class="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"
            >
              Projects
            </span>
          </h2>

          <p
            class="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0"
          >
            A collection of {{ projects.length }}+ projects across various
            domains, showcasing expertise in building scalable applications.
          </p>
        </div>

        <!-- Project Stats -->
        <!-- <div class="grid grid-cols-3 gap-4 mb-8">
            <div class="text-center p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/20">
                <div class="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">{{ projects.length }}</div>
                <div class="text-xs sm:text-sm text-gray-400">Total Projects</div>
            </div>
            <div class="text-center p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                <div class="text-2xl sm:text-3xl font-bold text-green-400 mb-1">{{ activeProjectsCount }}</div>
                <div class="text-xs sm:text-sm text-gray-400">In Production</div>
            </div>
            <div class="text-center p-4 rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20">
                <div class="text-2xl sm:text-3xl font-bold text-violet-400 mb-1">{{ projectCategories.length }}</div>
                <div class="text-xs sm:text-sm text-gray-400">Categories</div>
            </div>
        </div> -->

        <!-- Filter Tabs -->
        <div class="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
          <button
            @click="
              projectFilter = 'all';
              showAllProjects = false;
            "
            :class="
              projectFilter === 'all'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            "
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all"
          >
            All Projects
          </button>
          <button
            @click="
              projectFilter = 'featured';
              showAllProjects = false;
            "
            :class="
              projectFilter === 'featured'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            "
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all"
          >
            <Icon name="mdi:star" class="inline-block mr-1" />
            Featured
          </button>
          <button
            v-for="category in projectCategories.slice(0, 5)"
            :key="category"
            @click="
              projectFilter = category;
              showAllProjects = false;
            "
            :class="
              projectFilter === category
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            "
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all"
          >
            {{ category }}
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          <ProjectCard
            v-for="(project, index) in filteredProjects"
            :key="index"
            v-bind="project"
          />
        </div>

        <!-- Show More / GitHub Section -->
        <div class="text-center space-y-4">
          <!-- Show More Toggle (if there are more than 6 projects) -->
          <button
            v-if="
              !showAllProjects &&
              filteredProjects.length >= 6 &&
              (projectFilter === 'all' ? projects.length > 6 : true)
            "
            @click="showAllProjects = true"
            class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-all inline-flex items-center gap-2"
          >
            <Icon name="mdi:chevron-down" class="text-xl" />
            Show More Projects
          </button>

          <!-- Separator -->
          <div class="flex items-center gap-4 max-w-md mx-auto py-4">
            <div class="flex-1 h-px bg-gray-800"></div>
            <span class="text-gray-500 text-sm">or</span>
            <div class="flex-1 h-px bg-gray-800"></div>
          </div>

          <!-- GitHub Link -->
          <div
            class="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 max-w-2xl mx-auto"
          >
            <div class="flex flex-col sm:flex-row items-center gap-6">
              <div class="flex-shrink-0">
                <div
                  class="w-16 h-16 bg-gradient-to-br from-blue-500 to-violet-500 rounded-full flex items-center justify-center"
                >
                  <Icon name="mdi:github" class="text-3xl text-white" />
                </div>
              </div>
              <div class="flex-1 text-center sm:text-left">
                <h3 class="text-xl font-bold text-white mb-2">
                  View All My Projects
                </h3>
                <p class="text-gray-400 text-sm mb-4">
                  Check out more of my work, open-source contributions, and code
                  samples on GitHub
                </p>
                <a
                  href="https://github.com/mohammadnovel"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-500/50"
                >
                  <Icon name="mdi:github" class="text-xl" />
                  Visit GitHub Profile
                  <Icon name="mdi:arrow-right" />
                </a>
              </div>
            </div>
          </div>

          <!-- Additional Stats -->
          <!-- <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 max-w-3xl mx-auto">
            <div class="text-center">
            <div class="text-2xl font-bold text-blue-400 mb-1">15+</div>
            <div class="text-xs text-gray-500">Repositories</div>
            </div>
            <div class="text-center">
            <div class="text-2xl font-bold text-green-400 mb-1">50+</div>
            <div class="text-xs text-gray-500">Commits</div>
            </div>
            <div class="text-center">
            <div class="text-2xl font-bold text-violet-400 mb-1">10+</div>
            <div class="text-xs text-gray-500">Technologies</div>
            </div>
            <div class="text-center">
            <div class="text-2xl font-bold text-orange-400 mb-1">6+</div>
            <div class="text-xs text-gray-500">Years Active</div>
            </div>
        </div> -->
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section
      id="contact"
      class="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50"
    >
      <div class="max-w-6xl mx-auto">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p class="text-gray-400 mb-8 text-base sm:text-lg">
            I'm currently available for freelance projects and full-time
            opportunities. Feel free to reach out!
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="mailto:moh.novelar@gmail.com"
              class="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-500/50 inline-flex items-center justify-center gap-2"
            >
              <Icon name="mdi:email" class="text-xl" />
              <span class="text-sm sm:text-base">moh.novelar@gmail.com</span>
            </a>
            <a
              href="https://wa.me/6283819751818"
              target="_blank"
              class="px-6 sm:px-8 py-3 sm:py-4 border border-gray-700 hover:border-gray-600 rounded-lg font-medium transition-all inline-flex items-center justify-center gap-2"
            >
              <Icon name="mdi:whatsapp" class="text-xl" />
              <span class="text-sm sm:text-base">WhatsApp</span>
            </a>
          </div>

          <div class="flex gap-6 justify-center">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              class="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Icon name="mdi:github" class="text-3xl" />
            </a>
            <a
              href="https://linkedin.com/in/moh-novel"
              target="_blank"
              class="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Icon name="mdi:linkedin" class="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
      <div class="max-w-6xl mx-auto">
        <div
          class="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left"
        >
          <p class="text-gray-500 text-xs sm:text-sm">
            © {{ new Date().getFullYear() }} 
          </p>
          <p class="text-gray-600 text-xs">Moh. Novel Anugrah R. All rights
            reserved.</p>
        </div>
      </div>
    </footer>

    <!-- Scroll to Top Button -->
    <button
      v-if="isScrolled"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-40"
    >
      <Icon name="mdi:arrow-up" class="text-xl" />
    </button>
  </div>
</template>

<script setup>
const mobileMenuOpen = ref(false);
const scrollProgress = ref(0);
const isScrolled = ref(false);
const activeSection = ref("hero");

const navigation = [
  {
    label: "About",
    id: "about",
  },
  {
    label: "Skills",
    id: "skills",
  },
  {
    label: "Experience",
    id: "experience",
  },
  {
    label: "Projects",
    id: "projects",
  },
];

// Smooth scroll to section
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

// Scroll to top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Handle scroll events
onMounted(() => {
  if (process.client) {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.value = Math.min((scrollY / height) * 100, 100);
      isScrolled.value = scrollY > 50;

      // Update active section
      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        "projects",
        "contact",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            activeSection.value = section;
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  }
});

const skills = [
  {
    title: "Backend Development",
    icon: "mdi:server-network",
    items: [
      "Node.js",
      "Express.js",
      "Laravel",
      "Lumen",
      "RESTful API",
      "Microservices",
    ],
  },
  {
    title: "Frontend Development",
    icon: "mdi:monitor-dashboard",
    items: ["Vue.js", "Nuxt.js", "React", "Next.js", "Quasar", "Tailwind CSS"],
  },
  {
    title: "Databases",
    icon: "mdi:database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Database Design"],
  },
  {
    title: "DevOps & Tools",
    icon: "mdi:rocket-launch",
    items: ["Docker", "Git", "CI/CD", "GitHub Actions", "Linux", "Nginx"],
  },
  {
    title: "Architecture",
    icon: "mdi:vector-arrange-below",
    items: ["MVC", "SOA", "System Integration", "API Design", "Data Modeling"],
  },
  {
    title: "Methodologies",
    icon: "mdi:chart-timeline-variant",
    items: ["Agile", "Scrum", "SDLC", "Waterfall", "TDD"],
  },
];

const experiences = [
  {
    title: "Backend Developer",
    company: "PT. Japfa Comfeed Indonesia Tbk",
    period: "April 2025 - Present",
    location: "Jakarta, Indonesia",
    description:
      "Developed and maintained the backend of a livestock management system using Node.js, Express, and PostgreSQL. Integrated seamlessly with SAP for feed inventory, procurement, and livestock data synchronization, supporting efficient farm operations and enterprise-wide reporting.",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "SAP Integration"],
    current: true,
  },
  {
    title: "Fullstack Developer",
    company: "Freelance",
    period: "January 2024 - Present",
    location: "Bogor, Indonesia",
    description:
      "Developed and implemented inter-island logistics shipping application and API for eastern Java region (Saghara Express). Designed e-library (e-perpus) application, built comprehensive e-report system for student report cards, and engineered API and school management application for middle schools in NTT region.",
    technologies: ["Laravel", "Node.js", "Vue.js", "PostgreSQL", "MySQL"],
    current: true,
    projects: [
      "Saghara Express - Logistics Shipping App",
      "E-Library System",
      "E-Report Card System",
      "School Management App (NTT)",
    ],
  },
  {
    title: "Web Engineer",
    company: "PT Humanika Bisnis Digital",
    period: "May 2020 - January 2024",
    location: "Jakarta, Indonesia",
    description:
      "Engineered and maintained Assessment Apps & Events (Hipotest) using MEVN stack for app.hipotest.com and hipotest.com. Implemented features for assessments, tests, and event management. Served as primary liaison between development team and clients, managing relationships and communications, translating client requirements into actionable development tasks.",
    technologies: [
      "MongoDB",
      "Express.js",
      "Vue.js",
      "Node.js",
      "Client Management",
    ],
    projects: [
      "Hipotest Platform - Assessment & Events",
      "Client Communication & Requirements Analysis",
    ],
  },
  {
    title: "Web Developer",
    company: "Suit Career (PT. Vascomm Teknologi Solusi)",
    period: "December 2022 - May 2023",
    location: "Special Region of Yogyakarta (Remote)",
    description:
      "Worked remotely as a client-based developer. Developed and enhanced the Front-end WebView for Home Services, improving user interface and experience. Successfully integrated API functionalities for Home Services, ensuring seamless data flow and system interactions.",
    technologies: ["Vue.js", "WebView", "API Integration", "UI/UX"],
    projects: [
      "Home Services WebView Enhancement",
      "API Integration for Home Services",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "PT Semeru Indonesia Maju (Goorita)",
    period: "January 2022 - May 2022",
    location: "Jakarta, Indonesia",
    description:
      "Developed and maintained web applications using Laravel framework and PostgreSQL for logistics operations. Implemented functionalities to streamline logistics processes including order management, inventory control, and shipment tracking. Designed shipment tracking system using Lumen micro-framework with real-time tracking data. Developed integration with AnterAja delivery service API and maintained Globalgi website.",
    technologies: ["Laravel", "Lumen", "PostgreSQL", "API Integration"],
    projects: [
      "Goorita Logistics Platform",
      "Shipment Tracking System",
      "AnterAja API Integration",
      "Globalgi Website",
    ],
  },
  {
    title: "Fullstack Developer (Freelance)",
    company: "PT Robust Creative Media",
    period: "January 2018 - May 2022",
    location: "Bogor, Indonesia",
    description:
      "Built and maintained online assessment applications & Job Portal using Laravel (asesme.com, cakap-interview.com). Developed and maintained Point Of Sale (POS) system using Laravel (2018-2019). Handled development and maintenance of Voyage Management System (VMS) using Laravel as Backend and Quasar Framework as Frontend.",
    technologies: [
      "Laravel",
      "Quasar Framework",
      "Vue.js",
      "MySQL",
      "POS System",
    ],
    projects: [
      "AsesMe - Online Assessment Platform",
      "Cakap Interview - Job Portal",
      "Point of Sale (POS) System",
      "Voyage Management System (VMS)",
    ],
  },
  {
    title: "Web Developer",
    company: "PT Mitreka Solusi Indonesia",
    period: "October 2019 - April 2020",
    location: "Jakarta, Indonesia",
    description:
      "Engineered and maintained the ePNBP EBTKE application for managing non-tax state revenue in the renewable energy sector. Architected and implemented Service-oriented architecture (SOA) for the Sidara and Amora systems using Lumen micro-framework. Ensured robust, secure, and efficient performance of government applications, adhering to strict standards and regulations.",
    technologies: ["Laravel", "Lumen", "SOA", "Government Systems", "Security"],
    projects: [
      "ePNBP EBTKE - Government Application",
      "Sidara System (SOA)",
      "Amora System (SOA)",
    ],
  },
  {
    title: "IT Development",
    company: "PT. Surganya Motor Indonesia",
    period: "February 2019 - May 2019",
    location: "Depok, Indonesia",
    description:
      "Performed regular database backups to ensure data integrity and recoverability. Updated data daily to maintain accuracy and consistency. Conducted monthly audits of transaction data. Repaired financial data for head office and branch locations. Provided technical support for retail applications across all divisions and store branches, troubleshooting and resolving application issues.",
    technologies: [
      "Database Management",
      "SQL",
      "Retail Systems",
      "Data Integrity",
      "Technical Support",
    ],
    projects: [
      "Database Backup & Recovery",
      "Financial Data Management",
      "Retail Application Support",
    ],
  },
];

const projects = [
  // Current Projects (Featured)
  {
    title: "Livestock Management System",
    description:
      "Enterprise-level livestock management system with SAP integration for Japfa Comfeed Indonesia. Handles feed inventory, procurement, and livestock data synchronization for efficient farm operations.",
    tech: ["Node.js", "Express.js", "PostgreSQL", "SAP"],
    featured: true,
    status: "Production",
    category: "Enterprise",
  },
  {
    title: "Saghara Express",
    description:
      "Inter-island logistics shipping application and API system for eastern Java region. Complete logistics solution with tracking and management features.",
    tech: ["Laravel", "Vue.js", "PostgreSQL", "API"],
    featured: true,
    status: "Production",
    category: "Logistics",
  },
  {
    title: "School Management System - NTT",
    description:
      "Comprehensive school management application and API specifically tailored for middle schools in Nusa Tenggara Timur region.",
    tech: ["Laravel", "Vue.js", "MySQL", "API"],
    featured: true,
    status: "Production",
    category: "Education",
  },
  {
    title: "E-Library System (E-Perpus)",
    description:
      "Functional digital library application designed to improve access to educational resources for students and teachers.",
    tech: ["Laravel", "Vue.js", "MySQL"],
    featured: true,
    status: "Production",
    category: "Education",
  },
  {
    title: "E-Report Card System",
    description:
      "Comprehensive system to streamline the process of generating and managing student report cards with automated calculations.",
    tech: ["Laravel", "Vue.js", "MySQL"],
    status: "Production",
    category: "Education",
  },

  // Past Projects
  {
    title: "Hipotest Platform",
    description:
      "Assessment and event management platform using MEVN stack, serving thousands of users for online assessments and tests.",
    tech: ["MongoDB", "Express.js", "Vue.js", "Node.js"],
    link: "https://hipotest.com",
    category: "Assessment",
  },
  {
    title: "Goorita Logistics Platform",
    description:
      "Complete logistics operations platform with order management, inventory control, and real-time shipment tracking.",
    tech: ["Laravel", "Lumen", "PostgreSQL"],
    link: "https://bo.goorita.com",
    category: "Logistics",
  },
  {
    title: "Voyage Management System",
    description:
      "Maritime voyage management system using Laravel backend and Quasar Framework frontend for efficient vessel operations.",
    tech: ["Laravel", "Quasar", "PostgreSQL"],
    link: "https://vms.cnb.co.id",
    category: "Maritime",
  },
  {
    title: "ePNBP EBTKE",
    description:
      "Government application for managing non-tax state revenue in renewable energy sector with SOA architecture.",
    tech: ["Laravel", "Lumen", "SOA"],
    link: "https://epnbp-ebtke.esdm.go.id",
    category: "Government",
  },
  {
    title: "AsesMe Platform",
    description:
      "Online assessment application and job portal built with Laravel for recruitment and evaluation processes.",
    tech: ["Laravel", "MySQL", "Vue.js"],
    link: "https://asesme.com",
    category: "Assessment",
  },
  {
    title: "Cakap Interview",
    description:
      "Job portal platform for interview management and candidate assessment with integrated video interview features.",
    tech: ["Laravel", "MySQL", "API"],
    link: "https://cakap-interview.com",
    category: "HR Tech",
  },
  {
    title: "GlobalGI Website",
    description:
      "Corporate website for GlobalGI using Laravel framework with CMS capabilities and responsive design.",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    link: "https://globalgi.id",
    category: "Corporate",
  },
  {
    title: "Home Services Platform",
    description:
      "Front-end WebView for home services marketplace with seamless API integration for service bookings.",
    tech: ["Vue.js", "API Integration", "WebView"],
    category: "Service",
  },
  {
    title: "Point of Sale (POS) System",
    description:
      "Retail point of sale system with inventory management, sales reporting, and transaction processing.",
    tech: ["Laravel", "MySQL", "Cash Register"],
    category: "Retail",
  },
  {
    title: "AnterAja Integration",
    description:
      "Delivery service API integration with AnterAja platform for automated shipment and tracking management.",
    tech: ["Lumen", "API", "PostgreSQL"],
    category: "Integration",
  },
];
// Project Filter
const projectFilter = ref("all");
const showAllProjects = ref(false);

// Filtered Projects
const filteredProjects = computed(() => {
  let filtered = projects;

  if (projectFilter.value !== "all") {
    if (projectFilter.value === "featured") {
      filtered = projects.filter((p) => p.featured);
    } else {
      filtered = projects.filter((p) => p.category === projectFilter.value);
    }
  }

  // Show only 6 projects initially, all if showAllProjects is true
  return showAllProjects.value ? filtered : filtered.slice(0, 6);
});

// Get unique categories
const projectCategories = computed(() => {
  const categories = new Set();
  projects.forEach((p) => {
    if (p.category) categories.add(p.category);
  });
  return Array.from(categories).sort();
});

// Count projects by status
const activeProjectsCount = computed(() => {
  return projects.filter((p) => p.status === "Production").length;
});

// Helper function to calculate total years
const calculateTotalYears = () => {
  const startYear = 2018; // First job started
  const currentYear = new Date().getFullYear();
  return currentYear - startYear + 1;
};

// Helper function to count all projects
const countProjects = () => {
  let count = 0;
  experiences.forEach((exp) => {
    if (exp.projects) {
      count += exp.projects.length;
    }
  });
  return count;
};

// Helper function to count unique technologies
const countTechnologies = () => {
  const techSet = new Set();
  experiences.forEach((exp) => {
    if (exp.technologies) {
      exp.technologies.forEach((tech) => techSet.add(tech));
    }
  });
  return techSet.size;
};

const experienceFilter = ref("all");

const filteredExperiences = computed(() => {
  if (experienceFilter.value === "all") {
    return experiences;
  } else if (experienceFilter.value === "current") {
    return experiences.filter((e) => e.current);
  } else if (experienceFilter.value === "freelance") {
    return experiences.filter((e) =>
      e.company.toLowerCase().includes("freelance")
    );
  } else if (experienceFilter.value === "fulltime") {
    return experiences.filter(
      (e) => !e.company.toLowerCase().includes("freelance")
    );
  }
  return experiences;
});
</script>

<style scoped>
.slide-down-enter-active {
  transition: all 0.3s ease-out;
}

.slide-down-leave-active {
  transition: all 0.2s ease-in;
}

.slide-down-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}

.slide-down-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

/* Gradient Animation */
@keyframes gradient {
  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  background-size: 200% auto;
  animation: gradient 5s ease infinite;
}

/* Float Animation */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Perspective for 3D effect */
.perspective-1000 {
  perspective: 1000px;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-15px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Rotate on Hover */
.hover\:rotate-3:hover {
  transform: rotate(3deg);
}
</style>
