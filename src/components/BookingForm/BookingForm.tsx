'use client';

import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { createBooking } from '@/lib/api';
import { BookingRequest } from '@/types/camper';
import styles from './BookingForm.module.css';

interface Props {
  camperId: string;
}

export function BookingForm({ camperId }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingRequest>();

  async function onSubmit(data: BookingRequest) {
    try {
      await createBooking(camperId, data);
      toast.success('Booking request sent successfully!');
      reset();
    } catch {
      toast.error('Something went wrong. Please try again.');
    }
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Book your campervan now</h3>
      <p className={styles.subtitle}>Stay connected! We are always ready to help you.</p>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field}>
          <input
            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
            placeholder="Name*"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <span className={styles.error}>{errors.name.message}</span>}
        </div>

        <div className={styles.field}>
          <input
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            placeholder="Email*"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
            })}
          />
          {errors.email && <span className={styles.error}>{errors.email.message}</span>}
        </div>

        <button
          className={styles.btn}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
}
