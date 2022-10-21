import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Switch } from '@headlessui/react';

const data = {
  firstName: 'cuong',
  gender: 'male',
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('firstName')} />
        <select
          defaultChecked={false}
          {...register('gender')}
        >
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <input type="submit" />
      </form>
      <MyToggle />
    </div>
  );
}

function MyToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch.Group>
    <div className="flex items-center">
      <Switch.Label className="mr-4">Enable notifications</Switch.Label>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? 'bg-blue-600' : 'bg-gray-200'
        } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
      >
        <span
          className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
        />
      </Switch>
    </div>
  </Switch.Group>
  );
}
