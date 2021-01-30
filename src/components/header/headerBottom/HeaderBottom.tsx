import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { BiX, BiSearch } from 'react-icons/bi';
import { useOnClickDocument } from '../../../hooks/useOnClickDocument';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { HeaderBottomProps } from '../Header' 

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

const HeaderBottom = ({
  searchHandler,
  clickRoutineHandler,
  filterHandler
}:HeaderBottomProps): JSX.Element => {
  const dropdownRefs = [useRef(), useRef()];
  const [filterArr, setFilterArr] = useState<IFilterOption[]>([]);
  // const [partArr,]
  // const [toolArr]
  // const [categoryArr]
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
    if (event.target.classList.contains('custom-option-item')) {
      return;
    }
    allClose();
  });

  useOnClickDocument(dropdownRefs[1], (event) => {
    if (event.target === dropdownRefs[1].current) {
      return;
    }
    if (event.target.classList.contains('custom-option-item')) {
      return;
    }
    allClose();
  });

  const onChangeSelect = (id: number, op: IFilterOption) => {
    console.log(id, op)
    toggleDropdwon(id);
    // const filterRemove = filterArr.filter((item) => item.label === op.label);
    // if (filterRemove.length === 0) setFilterArr([...filterArr, op]);
    const hasLabel = filterArr.some((item) => item.label === op.label);
    if (!hasLabel) {
      setFilterArr([...filterArr, op]);
    }
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
                          className={'custom-option-item'}
                          isdefault={!!op.isDefault}
                          onClick={(e) => {
                            e.stopPropagation();
                            onChangeSelect(model.id, op);
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
          <CustomSelect>STRETCHING</CustomSelect>
          <CustomSelect>ROUTINE</CustomSelect>
        </FilterWrap>
        <SearchInputWrap>
          <SearchInput placeholder="검색어를 입력해주세요." />
          <Search />
        </SearchInputWrap>
      </Wrap>
      <TagWrap>
        {filterArr &&
          filterArr.map((op, index) => (
            <FilterCard key={op.value}>
              {op.label}
              <Close
                onClick={() => {
                  const removeFilter = filterArr.filter(
                    (item) => item.label !== op.label,
                  );
                  setFilterArr(removeFilter);
                }}
              />
            </FilterCard>
          ))}
        {filterArr.length !== 0 && (
          <Clear
            onClick={() => {
              setFilterArr([]);
            }}
          >
            Clear
          </Clear>
        )}
      </TagWrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
const FilterWrap = styled.div`
  display: flex;
  flex: 1;
`;

const CustomSelect = styled.div`
  background-color: #f0f0f0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: none;
  outline: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
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
    background-color: #dadada;
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
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  left: 0;
  top: ${(props: { width: number; height: number }) => `${props.height}px`};
  width: ${(props: { width: number; height: number }) => `${props.width}px`};
  background-color: #f0f0f0;
  text-align: center;
  border-radius: 5px;
`;

const SearchInputWrap = styled.div``;

const SearchInput = styled.input`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: #f0f0f0;
  border: none;
  padding: 0 40px 0 15px;
  line-height: 30px;
  outline: none;
  color: #000000;
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
  background-color: #f0f0f0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  color: #000000;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  padding: 3px;
`;
const Clear = styled.button`
  width: 50px;
  background-color: #f0f0f0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  color: #000000;
  border-radius: 5px;
  display: flex;
  border: none;
  justify-content: center;
  margin-left: 20px;
  padding: 3px 15x;
  outline: none;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #bdbdbd;
  }
`;
const Search = styled(BiSearch)`
  position: relative;
  top: 22%;
  right: 13%;
  font-size: 20px;
  color: #000000;
  cursor: pointer;
`;
const Close = styled(BiX)`
  cursor: pointer;
`;
const TagWrap = styled.div`
  display: flex;
`;
const Arrow = styled(BsFillCaretDownFill)``;

export default HeaderBottom;
