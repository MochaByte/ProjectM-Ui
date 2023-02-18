import { isAddress } from '@ethersproject/address'
import { Input } from '@pancakeswap/uikit'
import { useState } from 'react'
import FormError from 'views/Bridge/components/FormError'

interface AddressInputProps {
  value: string
  onChange: (value: string) => void
  onChangeIsValid: (value: boolean) => void
}

const AddressInput: React.FC<AddressInputProps> = ({ value, onChange }) => {
  const isValid = isAddress(value)
  const [touched, setTouched] = useState(false)

  return (
    <>
      <Input
        placeholder="0xXXXXXXXXXXXXXXX…"
        onBlur={() => setTouched(true)}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        isWarning={!isValid && touched}
      />
      {!isValid && touched && <FormError>Token Address not Valid!</FormError>}
    </>
  )
}

export default AddressInput
