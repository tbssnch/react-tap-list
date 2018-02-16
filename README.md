# Tap Room
### An application designed for Tap Rooms to keep track of their inventory.
### **By Tyler Bussanich**

## Description

This is an application that allows Tap Rooms to view their current inventory of beer, add, and delete beers in the tap list.


## Setup/Installation

Open the terminal on your computer.

Type "cd desktop" and hit enter.

After you are in the desktop,

Type "git clone https://github.com/tbssnch/react-tap-room.git" and hit enter.

Now, type in "cd react-tap-room" and hit enter

Next, type "atom ." (or whichever text editor you prefer) and hit enter.

Once your text editor has opened up the project, back in your terminal type in "npm install"

After the installation, type "npm run start"

After this, you will be able to enter http://localhost:8080/ into your browser and view the project.


## Support

Contact Tyler at tbussanich@gmail.com

## Technologies Used

HTML, CSS, JSX, JavaScript, React.


## Notes

I started the day by writing down a list of what I will need to have in the application before building out my component tree. For example, "Main page will display list of kegs. Each keg will include name, brewery, price, abv, and ibu."

I thought that I had my component structure all figured out, but the further I got into my project I wanted to go a different direction than what I had started with. I went with five children (add, edit, header, 404, and keg list) with one "grandchild"(keg), but the next go around I plan on doing something different with the edit feature. Right now, it is routing to it's own module. This doesn't really make sense or is helpful to the user having it route this way.

![ProjectTree](ProjectTree.svg)

As far as how this felt compared to Angular.. I miss Angular. Everything just feels pretty messy to me with this, especially with the styling. I'm sure as things progress and I start to get a better handle on things that will change.

## License

**Copyright (c) Tyler Bussanich**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
