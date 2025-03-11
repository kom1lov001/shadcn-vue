<template>
  <div>
    <div class="grid md:grid-cols-2 w-full h-screen">
      <div class="flex flex-col items-center justify-center">
        <Logo colors="black" class="!w-[72px] !h-[60.8px]"></Logo>
        <h1 class="font-medium text-3xl mt-4 mb-7">Welcome Back !!</h1>
        <p class="mb-[35px] text-[13px] font-medium">Please enter your credentials to log in</p>
        <form class="sm:w-2/3 w-full px-8" @submit="onSubmit">
          <div>
            <div class="space-y-6">
              <FormField
                v-slot="{ componentField }"
                name="username"
                :validate-on-blur="!isFieldDirty"
              >
                <FormItem>
                  <FormControl>
                    <Input class="" type="text" placeholder="Username" v-bind="componentField" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
              <FormField
                v-slot="{ componentField }"
                name="password"
                :validate-on-blur="!isFieldDirty"
              >
                <FormItem>
                  <FormControl>
                    <div class="relative">
                      <Input
                        :type="passwordVisible ? 'text' : 'password'"
                        v-bind="componentField"
                        placeholder="Password"
                        class="pr-10"
                      />
                      <Button
                        @click="passwordVisible = !passwordVisible"
                        variant="ghost"
                        size="icon"
                        class="absolute right-2 top-1/2 -translate-y-1/2"
                      >
                        <Eye v-if="!passwordVisible" class="w-5 h-5" />
                        <EyeOff v-else class="w-5 h-5" />
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>
            <p class="text-[14px] font-semibold cursor-pointer">Forgot password?</p>
            <Button type="submit" class="w-full bg-black hover:bg-black/80 active:bg-black/75">
              Sign in
            </Button>
          </div>
        </form>
        <Toaster />
      </div>

      <div class="w-full bg-black hidden flex items-center justify-center md:flex rounded-l-[46px]">
        <div class="flex flex-col items-center justify-center space-y-10">
          <Logo colors="white" class="w-[88px] h-[73px]"></Logo>
          <span class="text-[13px] text-white font-medium">New to our platform? Sign Up now.</span>
          <Button
            variant="outline"
            @click="sign_up"
            class="w-3/4 h-[42px] bg-transparent hover:bg-transparent text-white hover:text-white hover:opacity-90 active:opacity-70 rounded-[15px]"
          >
            SIGN UP
          </Button>
        </div>
      </div>
    </div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div v-if="isLoading" class="loader"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { h, ref, computed } from 'vue'
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { Toaster } from '@/components/ui/toast'
import { toast } from '@/components/ui/toast/use-toast'
import { Eye, EyeOff } from 'lucide-vue-next'

const passwordVisible = ref(false)

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/toast/use-toast'

import Logo from '@/components/icons/logo.vue'
import { user } from '@/utils/user'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const { toast } = useToast()
const userStore = computed(() => user)
const isLoading = ref(false)
const formSchema = toTypedSchema(
  z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
  }),
)

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formSchema,
})
const sign_up = () => {
  router.push('/signup')
}
const onSubmit = handleSubmit((values) => {
  if (values.username && values.password) {
    const userCheck = userStore.value.find(
      (val) => val.username == values.username && val.password == values.password,
    )
    if (userCheck) {
      isLoading.value = true
      setTimeout(() => {
        router.push('/')
        isLoading.value = false
      }, 600)
    } else {
      toast({
        title: 'Invalid Credentials',
        description: 'Please check your username and password.',
      })
    }
  }
})
</script>

<style scoped></style>
<style>
.loader {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid;
  border-color: #685f5f #6c5b5b00;
  animation: l1 1s infinite;
}
@keyframes l1 {
  to {
    transform: rotate(0.5turn);
  }
}
</style>
