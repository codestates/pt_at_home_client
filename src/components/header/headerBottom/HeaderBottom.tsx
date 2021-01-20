import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { BiX, BiSearch } from 'react-icons/bi';

const Wrap = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
const FilterWrap = styled.div`
  display: flex;
  flex: 1;
`;
const Form = styled.form`
  display: flex;
`;
const Select = styled.select`
  display: none;
  background-color: #212330;
  border: none;
  outline: none;
  border-radius: 5px;
  color: #f0f0f0;
  padding: 5px;
  margin-right: 15px;
`;
const Dropdown = styled.div`
  background-color: #212330;
  border: none;
  outline: none;
  border-radius: 5px;
  color: #f0f0f0;
  padding: 5px;
  margin-right: 15px;
`;
const CustomSelect = styled.div`
  background-color: #212330;
  border: none;
  outline: none;
  border-radius: 0 0 5px 5px;
  color: #f0f0f0;
  padding: 5px;
  margin-right: 15px;
`;
const Option = styled.option`
  display: ${(props: { isdefault: boolean }) =>
    props.isdefault ? 'none' : 'block'};
`;
const CustomOption = styled.div`
  display: ${(props: { isdefault: boolean }) =>
    props.isdefault ? 'none' : 'block'};
`;
const SearchInputWrap = styled.div``;
const SearchInput = styled.input`
  background: #202230;
  border: none;
  padding: 0 40px 0 15px;
  line-height: 30px;
  outline: none;
  color: #f0f0f0;
  border-radius: 5px;
  &:focus {
    &::-webkit-input-placeholder {
      color: transparent;
    }

    &::-moz-placeholder {
      color: transparent;
    }

    &:-ms-input-placeholder {
      color: transparent;
    }

    &::-ms-input-placeholder {
      color: transparent;
    }
  }
`;
const FilterCard = styled.span`
  width: 90px;
  background-color: #212330;
  color: #f0f0f0;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding: 3px;
`;
const Search = styled(BiSearch)`
  position: relative;
  top: 22%;
  right: 13%;
  font-size: 20px;
  color: #f0f0f0;
`;
const filterModels = [
  {
    id: 0,
    name: 'excercises',
    label: 'EXCERCISES',
    options: [
      {
        label: 'EXCERCISES',
        value: 'excercises',
        isDefault: true,
      },
      {
        label: '등',
        value: 'back',
      },
      {
        label: '허리',
        value: 'waist',
      },
      {
        label: '복부',
        value: 'stomach',
      },
      {
        label: '하체',
        value: 'lower body',
      },
    ],
  },
  {
    id: 1,
    name: 'equipment',
    label: 'EQUIPMENT',
    options: [
      {
        label: 'EQUIPMENT',
        value: 'equipment',
        isDefault: true,
      },
      {
        label: '아령',
        value: 'dumbbell',
      },
      {
        label: '밴드',
        value: 'band',
      },
    ],
  },
];
const HeaderBottom = () => {
  const { register, setValue, watch } = useForm();
  const [filterArr, setFilterArr] = useState<string[]>([]);
  const onChangeSelect = (
    e: React.ChangeEvent<HTMLSelectElement>,
    name: string,
  ) => {
    e.preventDefault();
    setFilterArr((props) => [...props, e.target.value]);
    setValue(name, name);
  };
  return (
    <>
      <Wrap>
        <FilterWrap>
          <Form>
            {filterModels.map((model) => {
              return (
                <div key={model.id}>
                  <Select
                    defaultValue={model.name}
                    name={model.name}
                    onChange={(e) => {
                      onChangeSelect(e, model.name);
                    }}
                    ref={register}
                  >
                    {model.options.map((op) => (
                      <Option
                        key={op.value}
                        value={op.value}
                        isdefault={!!op.isDefault}
                      >
                        {op.label}
                      </Option>
                    ))}
                  </Select>
                  <Dropdown>{watch(model.name)}</Dropdown>
                  <CustomSelect>
                    {model.options.map((op) => (
                      <CustomOption key={op.value} isdefault={!!op.isDefault}>
                        {op.label}
                      </CustomOption>
                    ))}
                  </CustomSelect>
                </div>
              );
            })}
          </Form>
        </FilterWrap>
        <SearchInputWrap>
          <SearchInput placeholder="검색어를 입력해주세요." />
          <Search />
        </SearchInputWrap>
      </Wrap>
      <FilterCard>
        등 운동
        <BiX />
      </FilterCard>
    </>
  );
};

export default HeaderBottom;
