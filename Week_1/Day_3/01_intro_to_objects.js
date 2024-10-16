const studentName = 'alice';
const cohort = 'oct 14 2024';
const hasGraduated = false;

const studentOne = ['alice', 'oct 14 2024', false];

// objects => collections of key/value pairs

const studentOneObj = {
  studentName: 'alice',
  cohort: 'oct 14 2024',
  hasGraduated: false
};

const key = 'studentName';

// square bracket syntax
const result = studentOneObj[key];

// dot syntax
const result2 = studentOneObj.hasGraduated;

console.log('result:', result);

const customer = {
  contactInfo: {
    streetAddress: '123 fake street'
  },
  products: []
}

customer['contactInfo']['streetAddress'];
customer.contactInfo.streetAddress;