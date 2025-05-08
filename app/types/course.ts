export type Term = {
  id: number;
  courseId?: number;
  dateFrom: string;
  dateTo: string;
  location: string;
  note: string;
};

export type Course = {
  id: number;
  name: string;
  title?: string;
  description?: string;
  thumbnailImageUrl?: string;
  imageUrl?: string;
  image?: string | null;
  price?: number;
  examPriceOurSchool?: number;
  examPriceExternal?: number;
  examPrice?: {
    schoolAlumni: number;
    otherAlumni: number;
  };
  requirements?: string[];
  items?: string[];
  duration?: string;
  note?: string;
  terms?: Term[];
};

export type Licence = {
  id: number;
  name: string;
  fileUrl: string;
};

export type ApplicationData = {
  title: string;
  name: string;
  surname: string;
  birthDate: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
  };
};

// API base URL
const API_URL = 'https://testadmin-masaze.matfix.cz';
const AUTH_TOKEN = '146bc54efbd8fa13e1a728c4097c8451dbc60949bb0ea189afaba77306ee6ba7';

export async function getCourseById(id: number): Promise<Course | null> {
  try {
    const res = await fetch(`${API_URL}/api/courses/${id}`, {
      headers: {
        'X-AUTH-TOKEN': AUTH_TOKEN
      },
      cache: 'no-store'
    });
    
    if (!res.ok) {
      console.error(`API Error: ${res.status} ${res.statusText}`);
      return null;
    }
    
    const text = await res.text();
    console.log('Course API Response:', text);
    
    try {
      const data = JSON.parse(text);
      return data;
    } catch (error) {
      console.error('JSON parse error:', error);
      return null;
    }
  } catch (error) {
    console.error('Error fetching course:', error);
    return null;
  }
}

export async function getAllCourses(): Promise<Course[]> {
  try {
    const res = await fetch(`${API_URL}/api/courses/list`, {
      headers: {
        'X-AUTH-TOKEN': AUTH_TOKEN
      },
      cache: 'no-store'
    });
    
    if (!res.ok) {
      console.error(`API Error: ${res.status} ${res.statusText}`);
      return [];
    }
    
    const text = await res.text();
    console.log('Courses API Response:', text);
    
    try {
      const data = JSON.parse(text);
      if (!Array.isArray(data)) {
        console.error('API nevrátilo pole:', data);
        return [];
      }
      return data;
    } catch (error) {
      console.error('JSON parse error:', error);
      return [];
    }
  } catch (error) {
    console.error('Error fetching courses:', error);
    return [];
  }
}

export async function getCourseTerms(courseId: number): Promise<Term[]> {
  try {
    const res = await fetch(`${API_URL}/api/courses/${courseId}/terms`, {
      headers: {
        'X-AUTH-TOKEN': AUTH_TOKEN
      },
      cache: 'no-store'
    });
    
    if (!res.ok) {
      console.error(`API Error: ${res.status} ${res.statusText}`);
      return [];
    }
    
    const text = await res.text();
    console.log('Course Terms API Response:', text);
    
    try {
      const data = JSON.parse(text);
      if (!Array.isArray(data)) {
        console.error('API nevrátilo pole:', data);
        return [];
      }
      return data;
    } catch (error) {
      console.error('JSON parse error:', error);
      return [];
    }
  } catch (error) {
    console.error('Error fetching course terms:', error);
    return [];
  }
}

export async function getTermById(termId: number): Promise<Term | null> {
  try {
    const res = await fetch(`${API_URL}/api/terms/${termId}`, {
      headers: {
        'X-AUTH-TOKEN': AUTH_TOKEN
      },
      cache: 'no-store'
    });
    
    if (!res.ok) {
      console.error(`API Error: ${res.status} ${res.statusText}`);
      return null;
    }
    
    const text = await res.text();
    console.log('Term API Response:', text);
    
    try {
      const data = JSON.parse(text);
      return data;
    } catch (error) {
      console.error('JSON parse error:', error);
      return null;
    }
  } catch (error) {
    console.error('Error fetching term:', error);
    return null;
  }
}

export async function getAllLicences(): Promise<Licence[]> {
  try {
    const res = await fetch(`${API_URL}/api/licences/list`, {
      headers: {
        'X-AUTH-TOKEN': AUTH_TOKEN
      },
      cache: 'no-store'
    });
    
    if (!res.ok) {
      console.error(`API Error: ${res.status} ${res.statusText}`);
      return [];
    }
    
    const text = await res.text();
    console.log('Licences API Response:', text);
    
    try {
      const data = JSON.parse(text);
      if (!Array.isArray(data)) {
        console.error('API nevrátilo pole:', data);
        return [];
      }
      return data;
    } catch (error) {
      console.error('JSON parse error:', error);
      return [];
    }
  } catch (error) {
    console.error('Error fetching licences:', error);
    return [];
  }
}

export async function submitTermApplication(termId: number, data: ApplicationData): Promise<boolean> {
  try {
    const res = await fetch(`${API_URL}/api/terms/${termId}/application`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-AUTH-TOKEN': AUTH_TOKEN
      },
      body: JSON.stringify(data)
    });
    
    return res.ok;
  } catch (error) {
    console.error('Error submitting application:', error);
    return false;
  }
} 