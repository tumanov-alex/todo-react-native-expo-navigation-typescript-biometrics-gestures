import 'react-native-get-random-values';
import { v4 as uuid4 } from 'uuid';

import { Task } from '../models/task';

export const seedTasks: Task[] = [
  {
    id: uuid4(),
    label: 'Lorem ipsum',
    completed: false,
  },
  {
    id: uuid4(),
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor enim nulla, vitae suscipit tellus finibus et. Fusce malesuada tellus id tempor vehicula. Cras eget interdum massa. Sed eget euismod lorem. Donec vel tortor eu sapien aliquet sagittis. Etiam et efficitur purus. Suspendisse pulvinar accumsan lorem placerat ullamcorper. Donec sed vehicula elit. Aenean eget purus nulla. Maecenas sodales sollicitudin laoreet. Integer hendrerit lacinia nisl, vel lacinia quam ornare non. Cras consequat, ipsum sed porta efficitur, ipsum diam convallis leo, sed sagittis nisi orci at tortor. Phasellus vulputate dolor non ex suscipit, nec semper nulla tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in nisl eu neque auctor congue.',
    completed: false,
  },
  {
    id: uuid4(),
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    completed: false,
  },
];
