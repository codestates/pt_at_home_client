import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { BiX, BiSearch } from 'react-icons/bi';
import { useOnClickDocument } from '../../hooks/useOnClickDocument';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { ControlBarProps } from '../../containers/ControlBarContainer';

interface IFilterOption {
  label: string;
  value: string;
  category: string;
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
    label: 'MUSCLE',
    ref: null,
    isShow: false,
    options: [
      {
        label: 'EXCERCISES',
        value: 'excercises',
        isDefault: true,
        category: 'part',
      },
      {
        label: '등',
        value: 'back',
        category: 'part',
      },
      {
        label: '허리',
        value: 'waist',
        category: 'part',
      },
      {
        label: '복부',
        value: 'stomach',
        category: 'part',
      },
      {
        label: '하체',
        value: 'lower body',
        category: 'part',
      },
      {
        label: '가슴',
        value: 'chest',
        category: 'part',
      },
      {
        label: '엉덩이',
        value: 'hip',
        category: 'part',
      },
      {
        label: '코어',
        value: 'core',
        category: 'part',
      },
      {
        label: '허벅지',
        value: 'thigh',
        category: 'part',
      },
      {
        label: '어깨',
        value: 'shoulder',
        category: 'part',
      },
    ],
  },
  {
    id: 1,
    name: 'equipment',
    label: 'TOOL',
    ref: null,
    isShow: false,
    options: [
      {
        label: 'EQUIPMENT',
        value: 'equipment',
        isDefault: true,
        category: 'tool',
      },
      {
        label: '맨손',
        value: 'none',
        category: 'tool',
      },
      {
        label: '기구',
        value: 'tools',
        category: 'tool',
      },
      {
        label: '아령',
        value: 'dumbbell',
        category: 'tool',
      },
      {
        label: '밴드',
        value: 'band',
        category: 'tool',
      },
      {
        label: '박스',
        value: 'box',
        category: 'tool',
      },
      {
        label: '볼',
        value: 'ball',
        category: 'tool',
      },
    ],
  },
];

const ControlBar = ({
  searchHandler,
  clickRoutineHandler,
  filterHandler,
}: ControlBarProps): JSX.Element => {
  const path = useLocation().pathname;
  const dropdownRefs = [useRef(), useRef()];
  const [filterArr, setFilterArr] = useState<IFilterOption[]>([]);
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [category, setCategory] = useState('');
  const [tool, setTool] = useState<string[]>([]);
  const [part, setPart] = useState<string[]>([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [dropdownModels, setDropdownModels] = useState(() => {
    return filterModels.map((filter) => {
      filter.ref = dropdownRefs[filter.id];
      return filter;
    });
  });

  useEffect(() => {
    if (filterArr.length !== 0) {
      filterHandler({ category, tool, part });
    }
  }, [filterArr]);

  const allClose = () => {
    setDropdownModels(
      dropdownModels.map((model) => {
        model.isShow = false;
        return model;
      }),
    );
  };

  const changeSearchHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setSearchKeyword(e.target.value);
  };

  const clickSearchHandler = (): void => {
    searchHandler({ keyword: searchKeyword });
    setSearchKeyword('');
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
    console.log(id, op);
    toggleDropdwon(id);

    const hasLabel = filterArr.some((item) => item.label === op.label);
    const hasNone = filterArr.some((item) => item.label === '맨손');
    if (!hasLabel) {
      if (op.label === '기구') {
        let temp = filterArr.filter((item) => item.category !== 'tool');
        setFilterArr([...temp, op]);
        setCategory('기구');
      } else if (op.label === '맨손') {
        let temp = filterArr.filter((item) => item.category !== 'tool');
        setFilterArr([...temp, op]);
        setCategory('맨손');
      } else if (op.label !== '기구' && op.category === 'tool') {
        let temp = filterArr.filter(
          (item) => item.label !== '맨손' && item.label !== '기구',
        );
        setFilterArr([...temp, op]);
        setTool([...tool, op.label]);
      } else if (op.category === 'part') {
        setPart([...part, op.label]);
        setFilterArr([...filterArr, op]);
      } else setFilterArr([...filterArr, op]);
    }
    // const filterRemove = filterArr.filter((item) => item.label === op.label);
    // if (filterRemove.length === 0) setFilterArr([...filterArr, op]);
  };

  const toggleDropdwon = (id: number) => {
    setToggleDropDown(!toggleDropDown);
    if (toggleDropDown) {
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
    } else {
      allClose();
    }
  };

  return (
    <ControlBarWrap>
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
          <CustomSelect
            onClick={() =>
              filterHandler({ category: '스트레칭', part: [], tool: [] })
            }
          >
            STRETCHING
          </CustomSelect>
          {path === '/createroutine' ? (
            ''
          ) : (
            <CustomSelect onClick={clickRoutineHandler}>ROUTINE</CustomSelect>
          )}
        </FilterWrap>
        {path === '/createroutine' ? (
          ''
        ) : (
          <SearchInputWrap>
            <SearchInput
              placeholder="검색어를 입력해주세요."
              value={searchKeyword}
              onChange={changeSearchHandler}
            />
            <Search onClick={clickSearchHandler} />
          </SearchInputWrap>
        )}
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
              setTool([]);
              setPart([]);
              setCategory('');
            }}
          >
            Clear
          </Clear>
        )}
      </TagWrap>
    </ControlBarWrap>
  );
};

const ControlBarWrap = styled.div`
  background-color: #e0e5ec;
  width: 100%;
  padding: 15px 0 0 60px;
  display: flex;
  flex-flow: column nowrap;
  height: 95px;
  box-shadow: rgb(0 0 0 / 24%) 10px 2px 8px;
`;

const Wrap = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
const FilterWrap = styled.div`
  display: flex;
`;

const CustomSelect = styled.div`
  background-color: #f0f0f0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: none;
  outline: none;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000000;
  padding: 8px 10px;
  margin-right: 50px;
  width: 170px;
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

const SearchInputWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 267px;
`;

const SearchInput = styled.input`
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: #f0f0f0;
  border: none;
  padding: 1px 40px 1px 15px;
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

export default ControlBar;
