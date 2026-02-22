// import styled from 'styled-components'

import Input from '../../ui/Input'
import Form from '../../ui/Form'
import Button from '../../ui/Button'
import FileInput from '../../ui/FileInput'
import Textarea from '../../ui/Textarea'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createCabin } from '../../services/apiCabins'
import toast from 'react-hot-toast'
import FormRow from '../../ui/FormRow'

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm()
  const { errors } = formState

  const queryClient = useQueryClient()

  const { isPending, mutate } = useMutation({
    mutationFn: createCabin,
    onSuccess: async () => {
      toast.success('Cabin created successfully')
      await queryClient.invalidateQueries({ queryKey: ['cabins'] })
      reset()
    },
    onError: (err) => toast.error(err.message),
  })

  const onSubmit = (data) => {
    // console.log(data)
    // console.log(data.image[0].name)
    mutate({ ...data, image: data.image[0] })
  }

  const onError = (errors) => {
    // console.log(errors)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label='Cabin name' error={errors?.name?.message}>
        <Input
          type='text'
          id='name'
          disabled={isPending}
          {...register('name', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow label='Maximum capacity' error={errors?.maxCapacity?.message}>
        <Input
          type='number'
          id='maxCapacity'
          disabled={isPending}
          {...register('maxCapacity', {
            required: 'This field is required',
            min: { value: 1, message: 'Capacity should be at least 1' },
          })}
        />
      </FormRow>

      <FormRow label='Regular price' error={errors?.regularPrice?.message}>
        <Input
          type='number'
          id='regularPrice'
          disabled={isPending}
          {...register('regularPrice', {
            required: 'This field is required',
            min: { value: 1, message: 'Price Should be at least 1' },
          })}
        />
      </FormRow>

      <FormRow label='Discount' error={errors?.discount?.message}>
        <Input
          type='number'
          id='discount'
          disabled={isPending}
          defaultValue={0}
          {...register('discount', {
            required: 'This field is required',
            validate: (value) =>
              value <= getValues().regularPrice ||
              'Discount can not be greater than price',
          })}
        />
      </FormRow>

      <FormRow
        label='Description for website'
        error={errors?.description?.message}
      >
        <Textarea
          type='number'
          id='description'
          defaultValue=''
          disabled={isPending}
          {...register('description', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow
        label='Cabin photo'
        //  error={errors?.description?.message}
      >
        <FileInput
          id='image'
          accept='image/*'
          disabled={isPending}
          {...register('image', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button $variation='secondary' type='reset'>
          Cancel
        </Button>
        <Button disabled={isPending}>Add cabin</Button>
      </FormRow>
    </Form>
  )
}

export default CreateCabinForm
