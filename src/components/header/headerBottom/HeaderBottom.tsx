import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { BiX, BiSearch } from 'react-icons/bi';
import { useOnClickDocument } from '../../../hooks/useOnClickDocument';
import { BsFillCaretDownFill } from 'react-icons/bs';
const Wrap = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
const FilterWrap = styled.div`
  display: flex;
  flex: 1;
`;
const CustomSelect = styled.div`
  background-color: #212330;
  border: none;
  outline: none;
  border-radius: 5px;
  color: #f0f0f0;
  padding: 5px;
  margin-right: 15px;
  cursor: pointer;
  position: relative;
`;
const CustomOptionItem = styled.div`
  padding: 5px;
  display: ${(props: { isdefault: boolean }) =>
    props.isdefault ? 'none' : 'block'};
  &:hover {
    background-color: #30323d;
    &:nth-child(2) {
      border-radius: 5px 5px 0 0;
    }
    &:last-child {
      border-radius: 0 0 5px 5px;
    }
  }
`;
const CustomOption = styled.div`
  position: absolute;
  left: 0;
  top: ${(props: { width: number; height: number }) => `${props.height}px`};
  width: ${(props: { width: number; height: number }) => `${props.width}px`};
  background-color: #212330;
  text-align: center;
  border-radius: 5px;
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
const Arrow = styled(BsFillCaretDownFill)``;
interface IFilterOption {
  label: string;
  value: string;
  isDefault?: boolean;
}

interface IFilter {
  id: number;
  name: string;
  label: string;
  ref?: React.MutableRefObject<any> | null;
  isShow: boolean;
  options: IFilterOption[];
}

const filterModels: IFilter[] = [
  {
    id: 0,
    name: 'excercises',
    label: 'EXCERCISES',
    ref: null,
    isShow: false,
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
    ref: null,
    isShow: false,
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
  const dropdownRefs = [useRef(), useRef()];
  const [filterArr, setFilterArr] = useState<string[]>([]);
  const [dropdownModels, setDropdownModels] = useState(() => {
    return filterModels.map((filter) => {
      filter.ref = dropdownRefs[filter.id];
      return filter;
    });
  });
  const allClose = () => {
    setDropdownModels(
      dropdownModels.map((model) => {
        model.isShow = false;
        return model;
      }),
    );
  };
  useOnClickDocument(dropdownRefs[0], (event) => {
    if (event.target === dropdownRefs[0].current) {
      return;
    }
    allClose();
  });
  useOnClickDocument(dropdownRefs[1], (event) => {
    if (event.target === dropdownRefs[1].current) {
      return;
    }
    allClose();
  });
  const onChangeSelect = (id: number, value: string) => {
    toggleDropdwon(id);
    setFilterArr((props) => [...props, value]);
  };
  const toggleDropdwon = (id: number) => {
    setDropdownModels(
      dropdownModels.map((model) => {
        if (model.isShow && model.id === id) {
          model.isShow = false;
        } else {
          model.isShow = model.id === id;
        }
        return model;
      }),
    );
  };

  return (
    <>
      <Wrap>
        <FilterWrap>
          {dropdownModels.map((model) => {
            return (
              <div key={model.id}>
                <CustomSelect
                  ref={model.ref}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdwon(model.id);
                  }}
                >
                  {model.label}
                  {model.isShow && (
                    <CustomOption
                      width={model.ref?.current.offsetWidth}
                      height={model.ref?.current.offsetHeight}
                    >
                      {model.options.map((op) => (
                        <CustomOptionItem
                          key={op.value}
                          isdefault={!!op.isDefault}
                          onClick={() => {
                            onChangeSelect(model.id, op.value);
                          }}
                        >
                          {op.label}
                        </CustomOptionItem>
                      ))}
                    </CustomOption>
                  )}{' '}
                  <Arrow />
                </CustomSelect>
              </div>
            );
          })}
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
