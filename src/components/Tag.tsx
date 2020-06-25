import React from 'react';
import TagsInput from 'react-tagsinput';

interface Props {
  onChange: (a: string, b: string[]) => void;
  value: string[];
}
export default function Tag({ onChange, value }: Props) {
  const handleChange = React.useCallback((e: string[]) => onChange('tags', e), [
    onChange,
  ]);

  return <TagsInput value={value} onChange={handleChange} />;
}
