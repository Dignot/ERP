import { FilterContent } from './filter';
import * as Styled from './index.styled';
import { ContentTable } from './table';

export const HomePageContent = () => {
  return (
    <Styled.HomePageContentWrapper>
      <FilterContent />
      <ContentTable />
    </Styled.HomePageContentWrapper>
  );
};
