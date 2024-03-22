import {
  FC,
  ChangeEvent,
  useState,
  useRef,
  useEffect,
  useMemo,
  FormEvent,
} from "react";
import styles from "./InputForm.module.css";

interface InputFormProps {
  onSubmit: (name: string) => void;
  name: string;
  setName: (name: string) => void;
}

const InputForm: FC<InputFormProps> = ({ onSubmit, name, setName }) => {
  const [error, setError] = useState<string | null>(null);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const validateName = useMemo(() => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return (value: string) => {
      if (!nameRegex.test(value)) {
        return "Name must contain only alphabets and spaces.";
      }
      if (value.trim().length < 3) {
        return "Name must be at least 3 characters long.";
      }
      return null;
    };
  }, []);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
    setError(validateName(value?.trim()));
  };

  const debounceSubmit = (value: string) => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      onSubmit(value);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!error && name.length) {
      debounceSubmit(name);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="name" className={styles.label}>
        Enter your name:
      </label>
      <input
        type="text"
        id="name"
        className={styles.input}
        placeholder="John Doe"
        value={name}
        onChange={handleNameChange}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit" className={styles.button}>
        Get Insights
      </button>
    </form>
  );
};

export default InputForm;
