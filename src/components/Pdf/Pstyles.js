import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald',
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    flexWrap: 'wrap',
  },
  link: {
    fontSize: 12,
    color: '#0066cc',
    textDecoration: 'underline',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 16,
    marginBottom: 8,
    fontFamily: 'Oswald',
  },
  text: {
    marginBottom: 10,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  },
  jobTitle: {
    marginBottom: 6,
    fontSize: 14,
    fontFamily: 'Times-Roman',
    fontWeight: 'bold',
  },
  bullet: {
    marginBottom: 4,
    marginLeft: 10,
    fontSize: 13,
    fontFamily: 'Times-Roman',
  },
  projectItem: {
    marginBottom: 12,
  },
  projectTitle: {
    fontSize: 14,
    fontFamily: 'Times-Roman',
    fontWeight: 'bold',
    marginBottom: 3,
  },
  projectDesc: {
    fontSize: 13,
    fontFamily: 'Times-Roman',
    marginBottom: 3,
    marginLeft: 10,
  },
  projectLink: {
    fontSize: 12,
    color: '#0066cc',
    textDecoration: 'underline',
    marginLeft: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});