import { DropdownChangeEvent } from 'primereact/dropdown'
import { useCallback, useState } from 'react'

interface UseMultiSelectInputProps {
  onChange: (arg: string) => void
}

const useMultiSelectInput = ({ onChange }: UseMultiSelectInputProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleChangeMultiSelect = useCallback(
    ({ value }: DropdownChangeEvent) => {
      setSelectedOption(value)
      onChange(value)
    },
    [setSelectedOption, onChange],
  )

  return { handleChangeMultiSelect, selectedOption }
}

export default useMultiSelectInput
