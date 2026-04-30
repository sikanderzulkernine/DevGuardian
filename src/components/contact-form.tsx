'use client';

import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { TurnstileWidget } from '@/components/TurnstileWidget';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  showCompany?: boolean;
  compact?: boolean;
  variant?: 'default' | 'solid';
}

export function ContactForm({
  title = "Get in Touch",
  subtitle = "Send us a message and we'll get back to you within 24 hours.",
  showCompany = true,
  compact = false,
  variant = 'default'
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    message: '',
    hp_field: '', // Honeypot
  });
  const [turnstileToken, setTurnstileToken] = useState<string>('');
  const [turnstileKey, setTurnstileKey] = useState(0);
  const [mountTime, setMountTime] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  useEffect(() => {
    setMountTime(Date.now());
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email address is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';

    if (!turnstileToken) newErrors.captcha = 'Please verify that you are human';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };



  const onVerify = React.useCallback((token: string) => {
    setTurnstileToken(token);
    setErrors(prev => (prev.captcha ? { ...prev, captcha: '' } : prev));
  }, []);

  const onError = React.useCallback(() => {
    setTurnstileToken('');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        token: turnstileToken,
        ts: mountTime,
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset
      setFormData({ fullName: '', email: '', company: '', message: '', hp_field: '' });
      setTurnstileToken('');
      setTurnstileKey((current) => current + 1);
      setMountTime(Date.now());
      setErrors({});

    } catch (error: unknown) {
      console.error('Form error:', error);
      let errorMessage = "Please try again later.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      toast({
        title: "Error sending message",
        description: errorMessage,
        variant: "destructive",
      });
      setTurnstileToken('');
      setTurnstileKey((current) => current + 1);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = Boolean(formData.fullName && formData.email && formData.message.length >= 10 && turnstileToken);

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2 text-white">Message Sent!</h3>
        <p className="text-zinc-400 mb-6">Thank you for contacting us. We'll get back to you soon.</p>
        <Button onClick={() => {
          setMountTime(Date.now());
          setIsSubmitted(false);
        }}>Send Another Message</Button>
      </div>
    );
  }

  const inputClass = variant === 'solid'
    ? "bg-zinc-950 border-white/10 text-white placeholder:text-zinc-500 focus:bg-zinc-900 transition-colors"
    : "bg-zinc-900/60 border-white/10 text-white placeholder:text-zinc-500 focus:bg-zinc-900/80 transition-colors";

  const Wrapper = 'div';
  const wrapperProps = variant === 'solid'
    ? { className: "card-solid flex flex-col gap-6 rounded-xl border py-6 overflow-hidden transition-colors" }
    : { className: "card-solid flex flex-col gap-6 rounded-3xl border py-6 overflow-hidden transition-colors" };

  return (
    <Wrapper {...wrapperProps}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        {subtitle && <CardDescription className="text-muted-foreground">{subtitle}</CardDescription>}
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">

            {/* Honeypot Field (Hidden) */}
            <div className="hidden" aria-hidden="true">
              <input
                type="text"
                name="hp_field"
                value={formData.hp_field}
                onChange={handleInputChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fullName" className="block mb-2">Full Name *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className={`${inputClass} ${errors.fullName ? 'border-red-400' : ''}`}
                />
                {errors.fullName && <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="block mb-2">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className={`${inputClass} ${errors.email ? 'border-red-400' : ''}`}
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            {showCompany && (
              <div>
                <Label htmlFor="company" className="block mb-2">Company (Optional)</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Acme Corp"
                  className={inputClass}
                />
              </div>
            )}

            <div>
              <Label htmlFor="message" className="block mb-2">Message *</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your project..."
                rows={compact ? 4 : 6}
                className={`${inputClass} resize-none ${errors.message ? 'border-red-400' : ''}`}
              />
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Turnstile Widget */}
            <div className="flex flex-col gap-2">
              <TurnstileWidget
                key={turnstileKey}
                onVerify={onVerify}
                onError={onError}
                theme={variant === 'solid' ? 'dark' : 'auto'}
              />
              {errors.captcha && <p className="text-red-400 text-sm">{errors.captcha}</p>}
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-white text-black hover:bg-gray-100 transition-colors"
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin h-4 w-4 mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
        </form>
      </CardContent>
    </Wrapper>
  );
}
