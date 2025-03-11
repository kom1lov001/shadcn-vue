<template>
  <div class="grid md:grid-cols-2 w-full h-screen">
    <div class="w-full bg-black hidden flex items-center justify-center md:flex rounded-r-[46px]">
      <div class="flex flex-col items-center justify-center space-y-10">
        <Logo colors="white" class="w-[88px] h-[73px]"></Logo>
        <span class="text-[13px] text-white font-medium">Already have Account? Sign In now.</span>
        <Button
          variant="outline"
          @click="sign_in"
          class="w-3/4 h-[42px] bg-transparent hover:bg-transparent text-white hover:text-white hover:opacity-90 active:opacity-70 rounded-[15px]"
        >
          SIGN IN
        </Button>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center">
      <Logo colors="black" class="!w-[72px] !h-[60.8px]"></Logo>
      <h1 class="font-medium text-3xl mt-4 mb-7">Welcome Back !!</h1>
      <p class="mb-[35px] text-[13px] font-medium">Please provide your information to sign up.</p>
      <form class="sm:w-2/3 w-full px-8" @submit="onSubmit">
        <div class="flex flex-col gap-10">
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
                  <Input type="password" placeholder="Password" v-bind="componentField" />
                </FormControl>
                <!-- <FormDescription> This is your public display name. </FormDescription> -->
                <FormMessage />
              </FormItem>
            </FormField>
            <div class="flex items-center gap-4">
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
            </div>
          </div>
          <Button type="submit" class="w-full bg-black hover:bg-black/80 active:bg-black/75">
            Sign in
          </Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { h } from 'vue'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { toast } from '@/components/ui/toast/use-toast'

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

import Logo from '@/components/icons/logo.vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const formSchema = toTypedSchema(
  z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
  }),
)

const { isFieldDirty, handleSubmit } = useForm({
  validationSchema: formSchema,
})
const sign_in = () => {
  router.push('/login')
}
const onSubmit = handleSubmit((values) => {
  toast({
    title: 'You submitted the following values:',
    description: h(
      'pre',
      { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
      h('code', { class: 'text-white' }, 'dwddwedwdefewfew'),
    ),
  })
  console.log(values)
})
</script>

<style scoped></style>
