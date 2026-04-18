'use client';

import { useState } from 'react';
import { CamperFilters } from '@/types/camper';
import { FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Filters.module.css';

interface Props {
  onApply: (filters: CamperFilters) => void;
}

const BODY_TYPES = [
  { value: 'alcove', label: 'Alcove' },
  { value: 'panel_van', label: 'Panel Van' },
  { value: 'integrated', label: 'Integrated' },
  { value: 'semi_integrated', label: 'Semi Integrated' },
];

const TRANSMISSION_TYPES = [
  { value: 'automatic', label: 'Automatic' },
  { value: 'manual', label: 'Manual' },
];

const ENGINE_TYPES = [
  { value: 'petrol', label: 'Petrol' },
  { value: 'diesel', label: 'Diesel' },
  { value: 'hybrid', label: 'Hybrid' },
  { value: 'electric', label: 'Electric' },
];

export function Filters({ onApply }: Props) {
  const [location, setLocation] = useState('');
  const [form, setForm] = useState('');
  const [transmission, setTransmission] = useState('');
  const [engine, setEngine] = useState('');

  function handleApply() {
    onApply({
      location: location || undefined,
      form: form || undefined,
      transmission: transmission || undefined,
      engine: engine || undefined,
    });
  }

  function handleClear() {
    setLocation('');
    setForm('');
    setTransmission('');
    setEngine('');
    onApply({});
  }

  return (
    <div className={styles.filters}>
      <div className={styles.group}>
        <label className={styles.label}>Location</label>
        <div className={styles.inputWrapper}>
          <FaMapMarkerAlt className={styles.inputIcon} />
          <input
            className={styles.input}
            type="text"
            placeholder="City"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>

      <p className={styles.sectionTitle}>Filters</p>

      <div className={styles.group}>
        <p className={styles.groupLabel}>Camper form</p>
        <div className={styles.options}>
          {BODY_TYPES.map((type) => (
            <label key={type.value} className={styles.radioLabel}>
              <input
                type="radio"
                name="form"
                value={type.value}
                checked={form === type.value}
                onChange={() => setForm(form === type.value ? '' : type.value)}
                className={styles.radio}
              />
              {type.label}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.group}>
        <p className={styles.groupLabel}>Engine</p>
        <div className={styles.options}>
          {ENGINE_TYPES.map((type) => (
            <label key={type.value} className={styles.radioLabel}>
              <input
                type="radio"
                name="engine"
                value={type.value}
                checked={engine === type.value}
                onChange={() => setEngine(engine === type.value ? '' : type.value)}
                className={styles.radio}
              />
              {type.label}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.group}>
        <p className={styles.groupLabel}>Transmission</p>
        <div className={styles.options}>
          {TRANSMISSION_TYPES.map((type) => (
            <label key={type.value} className={styles.radioLabel}>
              <input
                type="radio"
                name="transmission"
                value={type.value}
                checked={transmission === type.value}
                onChange={() => setTransmission(transmission === type.value ? '' : type.value)}
                className={styles.radio}
              />
              {type.label}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.buttons}>
        <button className={styles.applyBtn} onClick={handleApply}>
          Search
        </button>
        <button className={styles.clearBtn} onClick={handleClear}>
          ✕ Clear filters
        </button>
      </div>
    </div>
  );
}
