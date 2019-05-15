import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  // TableComponent 的样式
  tableComponent: {
    textAlign: 'left',
    fontSize: '14px',
    padding: '14px 16px',
    borderWidth: '1px 0',
    bordercolor: '#e8e8e8',
    boxSizing: 'border-box',
  },
  th: {
    padding: '14px 16px',
  },
  tr: {
    padding: '14px 16px',
    borderWidth: '0 0 2px 0',
    background: 'rgba(0,0,0,0.02)',
    color: '#5c6b77',
    fontWeight: 500,
    whiteSpace: 'nowrap',
  },
  tableBody: {
    padding: '14px 16px',
    fontFamily: 'SFMono-Regular',
    lineHeight: '1.5',
  },
  propTr: {
    boxSizing: 'border-box',
    borderWidth: '1px 0',
    bordercolor: '#e8e8e8',
  },
  td: {
    fontWeight: 500,
    padding: '14px 16px',
    ':first-child': {
      width: '20%',
      color: '#003a8c',
      fontWeight: 500,
    },
    borderBottom: '1px solid #ebedf0',
  },
});

