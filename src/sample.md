Eichler integrals
=================

### Definition.

The *Eichler integral* $E_f$ of a modular form $\displaystyle{f(\tau)=\sum_{n=0}^\infty a_nq^n\in M_k}$ is defined by the Fourier series
$$
E_f(\tau)=\sum_{n=0}^\infty \frac{a_n}{n^{k-1}}q^n.
$$

### Theorem.
Suppose $f(\tau)$ is a cusp form. Then
$$
E_f(\tau)=
-\frac{(2\pi i)^{k-1}}{(k-2)!}\int_\tau^{i\infty}f(z)(\tau-z)^{k-2}dz.
$$

### Proof.
$$
\begin{aligned}
E_f(\tau) &= \int_\tau^{i\infty}f(z)(\tau-z)^{k-2}\,dz & &(w = z-\tau)\\[3ex]
&= (-1)^{k-2}\int_0^{i\infty}f(w+\tau)w^{k-2}\,dw\\[3ex]
&=(-1)^{k-2}\int_0^{i\infty}\sum_{n=1}^\infty a_ne^{2\pi i n(w+\tau)}w^{k-2}\,dw\\[3ex]
&=(-1)^{k-2}\sum_{n=1}^\infty a_ne^{2\pi i n\tau}\int_0^{i\infty}e^{2\pi i n w}w^{k-2}\,dw.
\end{aligned}
$$
We evaluate the line integral on the right:
$$
\begin{aligned}
\int_0^{i\infty}e^{2\pi i n w}w^{k-2}\,dw&= \left(\frac{i}{2\pi n}\right)^{k-1}\int_0^\infty e^{-t}t^{k-2}\,dt & &\left(w=\frac{it}{2\pi n}\right)\\[3ex]
&= \left(\frac{i}{2\pi n}\right)^{k-1}\Gamma(k-1)\\[3ex]
&= (-1)^{1-k}\frac{(k-2)!}{(2\pi i)^{k-1}}\,n^{1-k}
\end{aligned}
$$
Thus,
$$
\begin{aligned}
E_f(\tau)&= -\frac{(k-2)!}{(2\pi i)^{k-1}}\sum_{n=1}^\infty \frac{a_n}{n^{k-1}}q^n.
\end{aligned}
$$


### Definition.

The *period function* $r(f,\tau)$ of $f$ is defined by
$$
r(f,\tau) = E_f(\tau) - (E_f|_{2-k}S)(\tau).
$$
