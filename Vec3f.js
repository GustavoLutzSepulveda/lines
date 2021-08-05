class Vec3f {
  constructor(ix, iy, ip) {
		if(ix != undefined)
	    set(ix, iy, ip);
		else
	    set(0, 0, 0);
  }

  set(ix, iy, ip) {
    this.x = ix;
    this.y = iy;
    this.p = ip;
  }
}