<template>
  <div class="container mx-auto">
    <div class="border dark:border-neutral-700 bg-white dark:bg-neutral-800 rounded-md shadow-sm overflow-hidden">
      <MyCard />
      <!-- Main Content -->
      <div class="p-6 md:p-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Left Column -->
          <div class="col-span-2">
            <!-- About Me -->
            <div class="mb-8">
              <h1 class="text-xl font-bold mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Summary
              </h1>
              <div class="w-16 h-1 bg-blue-600 mb-4"></div>
              <p class="text-lg" >{{ $t("myabout") }}</p>
            </div>
            
            <!-- Professional Experience -->
            <div class="mb-8">
                <h1 class="text-xl font-bold mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Professional Experience
                </h1>
                <div class="w-16 h-1 bg-blue-600 mb-4"></div>
                
                <!-- Experience 1 -->
                <div class="mb-6 relative pl-6 border-l-2 border-blue-200">
                  <div class="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-blue-600"></div>
                  <h1 class="text-lg font-bold">Hardware and software MJCH | Frontend Developer</h1>
                  <p class="text-blue-600 font-medium text-sm mb-2">2024-2025</p>
                </div>
                <div class="mb-6 relative pl-6 border-l-2 border-blue-200">
                  <div class="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-blue-600"></div>
                  <h1 class="text-lg font-bold">Upwork | Full-stack Developer</h1>
                  <p class="text-blue-600 font-medium text-sm mb-2">2024-2025</p>
                  <ul class="list-disc pl-5 text-md text-gray-600 space-y-1">
                    <li>{{ $t("upwork") }}</li>
                  </ul>
                </div>
                <div class="mb-6 relative pl-6 border-l-2 border-blue-200">
                  <div class="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-blue-600"></div>
                  <h1 class="text-lg font-bold">Shahrisabz davlat pedagogika instituti | Engineer</h1>
                  <p class="text-blue-600 font-medium text-sm mb-2">2024-2025</p>
                </div>
            </div>
                        
            <!-- Education -->
            <div>
              <h1 class="text-xl font-bold mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                Education
              </h1>
              <div class="w-16 h-1 bg-blue-600 mb-4"></div>
              
              <!-- Education Items -->
              <div class="space-y-4">
                <!-- Education 1 -->
                <div class="relative pl-6 border-l-2 border-blue-200">
                  <div class="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-blue-600"></div>
                  <div class="bg-gray-50 p-3 rounded">
                    <p class="text-xs font-semibold text-blue-600">2020-2024</p>
                    <h1 class="font-semibold">Toshkemt kimyo texnalogiya instituti Shahrisabz filiyali</h1>
                  </div>
                </div>
              </div>
            </div>
            <!-- Projects -->
            <div>
              <h1 class="text-xl font-bold mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Course
              </h1>
              <div class="w-16 h-1 bg-blue-600 mb-4"></div>
              
              <!-- Certification 1 -->
              <div class="mb-4 items-center p-4 border-l-4 border-blue-600 bg-gray-500/50 rounded-r flex justify-between">
                <h1 class="text-lg font-semibold">Full-stack  __ Pyhton (Django)</h1> <p>2023-2024</p>
              </div>
              
            </div>
          </div>
          
          <!-- Right Column -->
          <div>
            <!-- Skills -->
             <Skills />
            

            <!-- Contact -->
            <div class="mt-8">
              <h1 class="text-xl font-bold mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </h1>
              <div class="w-16 h-1 bg-blue-600 mb-4"></div>
              <div class="space-y-2">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span class="text-sm">umairarshad6697@gmail.com</span>
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9h1m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                  <span class="text-sm">linkedin.com/in/umairarshad-dev</span>
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  <span class="text-sm">portfolio-five-flame-90.vercel.app</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Footer -->
      <div class="p-4 text-center text-sm text-gray-500 border-t border-gray-200/10">
        <p>Designed with Tailwind CSS | © 2025 Muhammad Umair Arshad</p>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import MyCard from '@/components/cards/MyCard.vue'
import Skills from '@/components/cards/Skills.vue'
</script>
